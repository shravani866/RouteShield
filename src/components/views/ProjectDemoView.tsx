import React from 'react';

const DEMO_VIDEO_SRC =
  import.meta.env.VITE_DEMO_VIDEO || '/demo.mp4';

export function ProjectDemoView() {
  return (
    <section className="w-full rounded-2xl border border-[#263451] bg-[#151d32] p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <div className="mb-2 text-sm font-bold tracking-[2px] text-[#4cd7f6]">
          PROJECT DEMO
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#dae2fd]">
          RouteShield — 2-Minute Product Demo
        </h1>

        <p className="mt-3 max-w-3xl text-sm sm:text-base leading-6 text-[#9aa8c2]">
          See how RouteShield helps businesses assess disruption exposure,
          compare alternatives, simulate scenarios, and build a contingency
          plan.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#31405f] bg-[#0b1326]">
        <video
          className="block w-full"
          controls
          playsInline
          preload="auto"
          poster="/demo-poster.jpg"
        >
          <source src={DEMO_VIDEO_SRC} type="video/mp4" />
          Your browser does not support the video player.
        </video>
      </div>

      <div className="mt-5 rounded-lg border border-[#263451] bg-[#10192d] p-4">
        <p className="text-sm leading-6 text-[#9aa8c2]">
          RouteShield is a decision-support platform. AI provides analysis,
          scenario insights, and alternative strategies, while the business
          decision-maker remains in control of the final contingency decision.
        </p>
      </div>
    </section>
  );
}