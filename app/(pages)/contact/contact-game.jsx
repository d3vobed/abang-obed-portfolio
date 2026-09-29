'use client';

import { useEffect, useRef, useState } from 'react';

import { Mail, MoveHorizontal } from 'lucide-react';

/* ------------------------------------------------------------------
   The contact level — a tiny 3D canvas world.
   Walk to the glowing terminal, press E (or tap) and the contact
   form opens. Collect the 6 floating flags for a small surprise.
   ------------------------------------------------------------------ */

const WORLD = {
  bg: 0x0d1113,
  ground: 0x0e1214,
  gridA: 0x24455a,
  gridB: 0x18222b,
  sky: 0x3ec1f3,
  pink: 0xe01e5a,
  yellow: 0xeeb63c,
  green: 0x29a56c,
  ink: 0x111212,
  bounds: 22,
  speed: 6.2,
};

const FLAG_TOTAL = 6;

/** Terminal screen texture — drawn once on a 2D canvas. */
function makeScreenTexture(THREE) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 352;
  const g = c.getContext('2d');

  g.fillStyle = '#0a1014';
  g.fillRect(0, 0, 512, 352);

  // frame
  g.strokeStyle = '#3ec1f3';
  g.lineWidth = 10;
  g.strokeRect(14, 14, 484, 324);
  g.strokeStyle = 'rgba(62,193,243,0.35)';
  g.lineWidth = 2;
  g.strokeRect(34, 34, 444, 284);

  // scanlines
  g.fillStyle = 'rgba(255,255,255,0.025)';
  for (let y = 40; y < 340; y += 8) g.fillRect(36, y, 440, 3);

  g.textAlign = 'center';
  g.fillStyle = '#3ec1f3';
  g.font = '700 84px "Courier New", monospace';
  g.fillText('SAY HELLO', 256, 150);

  g.fillStyle = 'rgba(255,255,255,0.78)';
  g.font = '500 44px "Courier New", monospace';
  g.fillText('PRESS  [ E ]', 256, 226);

  g.fillStyle = '#e01e5a';
  g.font = '700 34px "Courier New", monospace';
  g.fillText('■ OBX03.SYS — CONTACT.EXE', 256, 290);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  return tex;
}

/** Low-poly voxel agent — blue jacket, shades, pink backpack. */
function buildPlayer(THREE) {
  const group = new THREE.Group();
  const mat = color => new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.08 });

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.55, 28),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.42 }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  group.add(shadow);

  const legL = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.36, 0.17), mat(0x15181a));
  legL.position.set(-0.12, 0.18, 0);
  const legR = legL.clone();
  legR.position.x = 0.12;
  group.add(legL, legR);

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.58, 0.34), mat(WORLD.sky));
  body.position.y = 0.66;
  group.add(body);

  const zip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.02), mat(0x0d1417));
  zip.position.set(0, 0.66, 0.175);
  group.add(zip);

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.32, 0.34), mat(0xf0e6d2));
  head.position.y = 1.12;
  group.add(head);

  const hair = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.13, 0.38), mat(WORLD.ink));
  hair.position.y = 1.33;
  group.add(hair);

  const shades = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.1, 0.05), mat(0x0b0d0e));
  shades.position.set(0, 1.13, 0.17);
  group.add(shades);

  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.42, 0.15), mat(WORLD.pink));
  pack.position.set(0, 0.68, -0.25);
  group.add(pack);

  group.userData.legs = [legL, legR];
  return group;
}

function buildTerminal(THREE) {
  const group = new THREE.Group();

  const base = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.9, 0.55),
    new THREE.MeshStandardMaterial({ color: 0x11161b, roughness: 0.35, metalness: 0.35 }),
  );
  base.position.y = 0.95;
  group.add(base);

  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(base.geometry),
    new THREE.LineBasicMaterial({ color: WORLD.sky, transparent: true, opacity: 0.9 }),
  );
  edges.position.copy(base.position);
  group.add(edges);

  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(1.12, 0.78),
    new THREE.MeshBasicMaterial({ map: makeScreenTexture(THREE), toneMapped: false }),
  );
  screen.position.set(0, 1.38, 0.281);
  group.add(screen);

  const glow = new THREE.PointLight(WORLD.sky, 14, 9, 1.8);
  glow.position.set(0, 1.6, 0.9);
  group.add(glow);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(1.5, 1.72, 56),
    new THREE.MeshBasicMaterial({ color: WORLD.sky, transparent: true, opacity: 0.4, side: THREE.DoubleSide }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.03;
  group.add(ring);

  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.42, 6.5, 20, 1, true),
    new THREE.MeshBasicMaterial({ color: WORLD.sky, transparent: true, opacity: 0.08, depthWrite: false, side: THREE.DoubleSide }),
  );
  beam.position.y = 3.25;
  group.add(beam);

  group.userData.glow = glow;
  group.userData.ring = ring;
  return group;
}

function initGame(mount, THREE, api) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  } catch (err) {
    api.onFail();
    return () => {};
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(WORLD.bg);
  scene.fog = new THREE.Fog(WORLD.bg, 20, 58);

  const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 200);

  scene.add(new THREE.HemisphereLight(0x9fd4f5, 0x0c1013, 1.05));
  const sun = new THREE.DirectionalLight(0xffffff, 1.15);
  sun.position.set(7, 13, 5);
  scene.add(sun);

  // ground + grid — the dark canvas
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 500),
    new THREE.MeshBasicMaterial({ color: WORLD.ground }),
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  const grid = new THREE.GridHelper(160, 80, WORLD.gridA, WORLD.gridB);
  grid.position.y = 0.02;
  scene.add(grid);

  // floating pixel-cube decorations
  const palette = [WORLD.sky, WORLD.pink, WORLD.yellow, WORLD.green, 0xa9dbf5, 0xf7dc94];
  const decor = [];
  for (let i = 0; i < 14; i += 1) {
    const s = 0.4 + Math.random() * 0.75;
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(s, s, s),
      new THREE.MeshStandardMaterial({
        color: palette[i % palette.length],
        roughness: 0.5,
        metalness: 0.1,
        emissive: palette[i % palette.length],
        emissiveIntensity: 0.14,
      }),
    );
    const ang = Math.random() * Math.PI * 2;
    const rad = 8 + Math.random() * 13;
    cube.position.set(Math.cos(ang) * rad, 0.7 + Math.random() * 2.6, Math.sin(ang) * rad);
    cube.rotation.set(Math.random(), Math.random(), Math.random());
    cube.userData = {
      spin: 0.2 + Math.random() * 0.5,
      bobA: 0.15 + Math.random() * 0.3,
      bobP: Math.random() * Math.PI * 2,
      baseY: cube.position.y,
    };
    scene.add(cube);
    decor.push(cube);
  }

  // terminal + player
  const terminal = buildTerminal(THREE);
  terminal.position.set(0, 0, -9);
  scene.add(terminal);

  const player = buildPlayer(THREE);
  player.position.set(0, 0, 3);
  scene.add(player);

  // flags to collect
  const flagGeo = new THREE.OctahedronGeometry(0.24);
  const flagMat = new THREE.MeshStandardMaterial({
    color: WORLD.yellow,
    roughness: 0.3,
    metalness: 0.5,
    emissive: WORLD.yellow,
    emissiveIntensity: 0.5,
  });
  const flags = [];
  for (let i = 0; i < FLAG_TOTAL; i += 1) {
    const f = new THREE.Mesh(flagGeo, flagMat.clone());
    const ang = (i / FLAG_TOTAL) * Math.PI * 2 + 0.5;
    const rad = 6.5 + (i % 3) * 4.2;
    f.position.set(Math.cos(ang) * rad, 0.85, Math.sin(ang) * rad);
    f.userData = { taken: false, phase: i * 1.1, vanish: 0 };
    scene.add(f);
    flags.push(f);
  }

  // --- state ---
  const yaw = { v: 0 };
  const camDist = { v: 7.5 };
  const keys = {};
  let focused = false;
  let dragging = false;
  let dragMoved = 0;
  let lastX = 0;
  let lastY = 0;
  let near = false;
  let taken = 0;
  let raf = 0;
  const clock = new THREE.Clock();

  const isTyping = el =>
    el instanceof HTMLElement && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

  const onKeyDown = e => {
    if (isTyping(e.target)) return;
    const k = e.key.toLowerCase();
    if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k) && focused) e.preventDefault();
    keys[k] = true;
    if (k === 'e' && focused && near) api.open();
  };
  const onKeyUp = e => {
    keys[e.key.toLowerCase()] = false;
  };
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  // pointer: drag to orbit, click to interact via raycast
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  const onPointerDown = e => {
    if (e.target !== renderer.domElement) return;
    dragging = true;
    dragMoved = 0;
    lastX = e.clientX;
    lastY = e.clientY;
  };

  const onPointerMove = e => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    dragMoved += Math.abs(dx) + Math.abs(dy);
    yaw.v -= dx * 0.006;
  };

  const onPointerUp = e => {
    if (!dragging) return;
    dragging = false;
    if (dragMoved < 6) {
      const rect = renderer.domElement.getBoundingClientRect();
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      if (raycaster.intersectObject(terminal, true).length > 0) api.open();
    }
  };

  const onWheel = e => {
    if (e.target !== renderer.domElement) return;
    e.preventDefault();
    camDist.v = Math.min(12, Math.max(4.5, camDist.v + e.deltaY * 0.004));
  };

  const onDocDown = e => {
    const nowFocused = mount.contains(e.target);
    if (nowFocused !== focused) {
      focused = nowFocused;
      api.setFocus(focused);
    }
  };

  mount.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  mount.addEventListener('wheel', onWheel, { passive: false });
  document.addEventListener('pointerdown', onDocDown);

  const ro = new ResizeObserver(() => {
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    if (w === 0 || h === 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  ro.observe(mount);

  // --- main loop ---
  const tick = () => {
    raf = requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    // input vector: joystick takes priority, then keys (if focused)
    const inp = api.inputRef.current;
    let ix = inp.x;
    let iy = inp.y;
    if (ix === 0 && iy === 0 && focused) {
      ix = (keys.d || keys.arrowright ? 1 : 0) - (keys.a || keys.arrowleft ? 1 : 0);
      iy = (keys.w || keys.arrowup ? 1 : 0) - (keys.s || keys.arrowdown ? 1 : 0);
    }

    const fwd = new THREE.Vector3(-Math.sin(yaw.v), 0, -Math.cos(yaw.v));
    const right = new THREE.Vector3(Math.cos(yaw.v), 0, -Math.sin(yaw.v));
    const move = new THREE.Vector3()
      .addScaledVector(fwd, iy)
      .addScaledVector(right, ix);
    const moving = move.lengthSq() > 0.001;
    if (moving) {
      move.normalize();
      player.position.addScaledVector(move, WORLD.speed * dt);
      const d = Math.hypot(player.position.x, player.position.z);
      if (d > WORLD.bounds) player.position.multiplyScalar(WORLD.bounds / d);
      const targetRot = Math.atan2(move.x, move.z);
      let diff = targetRot - player.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      player.rotation.y += diff * Math.min(1, dt * 12);
    }

    // walk / idle animation
    const [legL, legR] = player.userData.legs;
    if (!reduced && moving) {
      legL.rotation.x = Math.sin(t * 11) * 0.55;
      legR.rotation.x = -Math.sin(t * 11) * 0.55;
      player.position.y = Math.abs(Math.sin(t * 11)) * 0.05;
    } else if (!reduced) {
      legL.rotation.x *= 1 - Math.min(1, dt * 10);
      legR.rotation.x *= 1 - Math.min(1, dt * 10);
      player.position.y = Math.sin(t * 2.2) * 0.02;
    } else {
      legL.rotation.x = 0;
      legR.rotation.x = 0;
      player.position.y = 0;
    }

    // camera follow
    const desired = new THREE.Vector3(
      player.position.x + Math.sin(yaw.v) * camDist.v,
      camDist.v * 0.56,
      player.position.z + Math.cos(yaw.v) * camDist.v,
    );
    camera.position.lerp(desired, 1 - Math.exp(-8 * dt));
    camera.lookAt(player.position.x, player.position.y + 1.1, player.position.z);

    // terminal pulse + proximity
    if (!reduced) {
      terminal.userData.glow.intensity = 12 + Math.sin(t * 2.4) * 4;
      terminal.userData.ring.material.opacity = 0.3 + Math.sin(t * 2.4) * 0.14;
    }
    const dTerm = player.position.distanceTo(terminal.position);
    const nowNear = dTerm < 2.7;
    if (nowNear !== near) {
      near = nowNear;
      api.setNear(near);
    }

    // flags
    flags.forEach(f => {
      if (f.userData.taken) {
        if (f.userData.vanish > 0) {
          f.userData.vanish = Math.max(0, f.userData.vanish - dt * 3.4);
          f.scale.setScalar(Math.max(0.001, f.userData.vanish));
          f.rotation.y += dt * 9;
          if (f.userData.vanish === 0) f.visible = false;
        }
        return;
      }
      if (!reduced) {
        f.rotation.y += dt * 1.6;
        f.position.y = 0.85 + Math.sin(t * 2 + f.userData.phase) * 0.22;
      }
      if (player.position.distanceTo(f.position) < 1.15) {
        f.userData.taken = true;
        f.userData.vanish = 1;
        taken += 1;
        api.setFlags(taken);
        api.flash(
          taken === FLAG_TOTAL
            ? 'ALL 6 FLAGS PWNED — YOU HAVE SOMETHING TO SAY. HIT THE TERMINAL'
            : `FLAG ${taken}/${FLAG_TOTAL} SECURED`,
        );
      }
    });

    // decor cubes
    if (!reduced) {
      decor.forEach(c => {
        c.rotation.x += dt * c.userData.spin * 0.6;
        c.rotation.y += dt * c.userData.spin;
        c.position.y = c.userData.baseY + Math.sin(t * 0.8 + c.userData.bobP) * c.userData.bobA;
      });
    }

    renderer.render(scene, camera);
  };
  tick();
  api.setReady(true);

  return function dispose() {
    cancelAnimationFrame(raf);
    ro.disconnect();
    mount.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    mount.removeEventListener('wheel', onWheel);
    document.removeEventListener('pointerdown', onDocDown);
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    scene.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach(m => {
          if (m.map) m.map.dispose();
          m.dispose();
        });
      }
    });
    renderer.dispose();
    if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
  };
}

export default function ContactGame({ onOpenForm, onFail }) {
  const mountRef = useRef(null);
  const openRef = useRef(onOpenForm);
  const failRef = useRef(onFail);
  const inputRef = useRef({ x: 0, y: 0 });
  const joyDownRef = useRef(false);
  const toastTimer = useRef(null);

  const [ready, setReady] = useState(false);
  const [near, setNear] = useState(false);
  const [flags, setFlags] = useState(0);
  const [focused, setFocused] = useState(false);
  const [toast, setToast] = useState('');
  const [knob, setKnob] = useState({ x: 0, y: 0 });

  openRef.current = onOpenForm;
  failRef.current = onFail;

  const flash = msg => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2800);
  };

  const open = () => openRef.current && openRef.current();

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  useEffect(() => {
    let disposed = false;
    let dispose = () => {};

    import('three')
      .then(THREE => {
        if (disposed) return;
        dispose = initGame(mountRef.current, THREE, {
          setReady,
          setNear,
          setFlags,
          setFocus: setFocused,
          flash,
          open: () => openRef.current && openRef.current(),
          onFail: () => failRef.current && failRef.current(),
          inputRef,
        });
      })
      .catch(() => {
        if (!disposed && failRef.current) failRef.current();
      });

    return () => {
      disposed = true;
      dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---- virtual joystick (touch) ---- */
  const joyMove = e => {
    if (!joyDownRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const max = rect.width / 2 - 20;
    let dx = e.clientX - (rect.left + rect.width / 2);
    let dy = e.clientY - (rect.top + rect.height / 2);
    const len = Math.hypot(dx, dy);
    if (len > max) {
      dx *= max / len;
      dy *= max / len;
    }
    setKnob({ x: dx, y: dy });
    inputRef.current = { x: dx / max, y: -dy / max };
  };

  const joyEnd = () => {
    joyDownRef.current = false;
    setKnob({ x: 0, y: 0 });
    inputRef.current = { x: 0, y: 0 };
  };

  return (
    <>
      <div ref={mountRef} className='cv-game-mount' aria-label='3D contact world — walk to the terminal and press E to open the contact form' role='application' />

      {!ready ? (
        <div className='cv-game-loading'>
          <div className='text-center'>
            generating canvas world…
            <div className='cv-game-loading-bar' />
          </div>
        </div>
      ) : null}

      <div className='cv-hud'>
        {/* top-left: controls hint */}
        <div className='cv-hud-hint absolute left-4 top-4 flex max-w-[70%] flex-wrap gap-2'>
          <span className='cv-hud-chip'>
            {focused ? (
              <>
                <kbd>W</kbd>
                <kbd>A</kbd>
                <kbd>S</kbd>
                <kbd>D</kbd> move · drag orbit · <kbd>E</kbd> open
              </>
            ) : (
              <>
                <MoveHorizontal size={12} aria-hidden /> click the world to take control
              </>
            )}
          </span>
        </div>

        {/* top-right: flag counter */}
        <div className='absolute right-4 top-4'>
          <span className='cv-hud-chip cv-hud-flags' data-done={flags === FLAG_TOTAL}>
            flags {flags}/{FLAG_TOTAL}
          </span>
        </div>

        {/* toast */}
        <div className='cv-hud-toast' data-show={Boolean(toast)} aria-live='polite'>
          {toast ? <span className='cv-toast-inner inline-block'>{toast}</span> : null}
        </div>

        {/* proximity prompt */}
        <div className='cv-hud-prompt' data-show={near && !toast}>
          <span className='cv-hud-chip'>
            terminal in range — <kbd>E</kbd> open form
          </span>
        </div>

        {/* virtual joystick */}
        <div
          className='cv-joystick'
          role='application'
          aria-label='Movement joystick'
          onPointerDown={e => {
            e.currentTarget.setPointerCapture(e.pointerId);
            joyDownRef.current = true;
            joyMove(e);
          }}
          onPointerMove={joyMove}
          onPointerUp={joyEnd}
          onPointerCancel={joyEnd}
        >
          <span
            className='cv-joystick-knob'
            style={{ transform: `translate(${knob.x}px, ${knob.y}px)` }}
          />
        </div>

        {/* interact */}
        <button type='button' className='cv-btn-interact' data-near={near} onClick={() => (near ? open() : flash('WALK TO THE GLOWING TERMINAL FIRST'))}>
          <Mail size={14} aria-hidden />
          open form
          <kbd>E</kbd>
        </button>
      </div>
    </>
  );
}
