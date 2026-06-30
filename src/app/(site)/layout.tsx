import SceneBackground from "@/components/motion/SceneBackground";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Nav from "@/components/Nav";

/**
 * Visual chrome for the marketing site (home page): a WebGL aurora backdrop
 * (with a CSS fallback for reduced-motion / no-WebGL), floating nav and Lenis
 * smooth-scroll. The printable /cv route lives outside this group, so it stays
 * clean and white.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SceneBackground />
      <Nav />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}
