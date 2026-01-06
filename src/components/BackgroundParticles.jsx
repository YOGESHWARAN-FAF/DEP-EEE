import React, { useEffect, useRef } from 'react';

const BackgroundParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let particles = [];
        let mouse = { x: null, y: null };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            // Spawn particles on mouse move
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(mouse.x, mouse.y, true));
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            constructor(x, y, isMouse = false) {
                this.x = x || Math.random() * width;
                this.y = y || Math.random() * height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.life = 100;
                this.color = isMouse
                    ? `hsla(${Math.random() * 60 + 180}, 100%, 70%, 1)` // Cyan/Blue
                    : `hsla(${Math.random() * 60 + 40}, 100%, 50%, 0.5)`; // Yellow/Gold
                this.isMouse = isMouse;
                this.decay = isMouse ? 2 : 0.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= this.decay;
                this.size -= 0.05;
                if (this.size < 0) this.size = 0;
            }

            draw() {
                ctx.fillStyle = this.color.replace('1)', `${this.life / 100})`);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Ambient particles
            if (particles.length < 50) {
                particles.push(new Particle(null, null, false));
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].life <= 0 || particles[i].size <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }
            ctx.shadowBlur = 0; // Reset for performance
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default BackgroundParticles;
