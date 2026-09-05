import Image from "next/image";
import type { CSSProperties } from "react";
import { CtaLinks } from "@/components/CtaLinks";
import { assetPath } from "@/lib/asset-path";

export function Sakata() {
  return (
    <section className="section section--sakata" aria-labelledby="sakata-title">
      <div className="container sakata-layout">
        <div className="sakata-copy">
          <p className="section-label" data-reveal data-reveal-delay="0">Nature / Sakata</p>
          <h2 id="sakata-title" data-reveal data-reveal-delay="1">
            <span className="sakata-title__line">喫茶の前に、</span>
            <span className="sakata-title__line">佐潟がある。</span>
          </h2>
          <p className="section-lead" data-reveal data-reveal-delay="2">
            店のすぐそばには、ラムサール条約湿地・佐潟。季節の植物や水辺の景色にふれながら、散策の前後にひと息つく時間を。
          </p>
          <p className="season-copy" data-reveal data-reveal-delay="3">蓮の季節、夕暮れの水辺、静かな空気とともに。</p>
        </div>
        <figure className="sakata-photo sakata-photo--main" data-reveal data-reveal-delay="4">
          <Image
            src={assetPath("/images/sakata/13_sakata_lake_sunset.jpg")}
            alt="夕焼けに染まる佐潟の水辺"
            fill
            sizes="(min-width: 768px) 65vw, 100vw"
          />
        </figure>
        <figure
          className="sakata-photo sakata-photo--sub"
          data-reveal
          data-reveal-delay="5"
          style={
            {
              "--sakata-lotus-image": `url("${assetPath("/images/sakata/16_lotus_blossoms.jpg")}")`,
            } as CSSProperties
          }
        >
          <Image
            src={assetPath("/images/sakata/16_lotus_blossoms.jpg")}
            alt="佐潟に咲く蓮の花"
            fill
            sizes="(min-width: 768px) 28vw, 100vw"
          />
        </figure>
        <div className="section-cta" data-reveal data-reveal-delay="6">
          <CtaLinks compact light showMap={false} />
        </div>
      </div>
    </section>
  );
}
