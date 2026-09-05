import Image from "next/image";
import { CtaLinks } from "@/components/CtaLinks";

export function Space() {
  return (
    <section className="section section--space" aria-labelledby="space-title">
      <div className="container">
        <div className="space-copy">
          <p className="section-label" data-reveal data-reveal-delay="0">Space</p>
          <h2 id="space-title" data-reveal data-reveal-delay="1">
            <span className="space-title__line">木と白壁の、</span>
            <span className="space-title__line">小さな居場所。</span>
          </h2>
          <p className="section-lead" data-reveal data-reveal-delay="2">
            木の質感と白壁を基調に、植物や暮らしの道具が並ぶ店内。食事だけでなく、<span className="space-nowrap">ひと息つく</span>時間そのものを静かに見せる場所です。
          </p>
        </div>
        <div className="space-gallery">
          <figure className="space-gallery__large" data-reveal data-reveal-delay="3">
            <Image
              src="/images/about/08_cafe_counter.jpg"
              alt="花と木のテーブルがあるカウンター前"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </figure>
          <figure className="space-gallery__small" data-reveal data-reveal-delay="4">
            <Image
              src="/images/space/09_cafe_interior.jpg"
              alt="木の建具と暮らしの品が並ぶ店内"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </figure>
        </div>
        <div className="section-cta" data-reveal data-reveal-delay="5">
          <CtaLinks compact showMap={false} />
        </div>
      </div>
    </section>
  );
}
