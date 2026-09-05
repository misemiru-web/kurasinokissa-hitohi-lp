import Image from "next/image";
import { CtaLinks } from "@/components/CtaLinks";
import { assetPath } from "@/lib/asset-path";
import { features } from "@/lib/site-data";

export function About() {
  return (
    <section className="section section--about" id="about" aria-labelledby="about-title">
      <div className="container about-layout">
        <div className="about-copy">
          <p className="section-label" data-reveal data-reveal-delay="0">About</p>
          <h2 id="about-title" data-reveal data-reveal-delay="1">
            <span className="about-title__line">喫茶の時間を、</span>{" "}
            <span className="about-title__line">暮らしの時間へ。</span>
          </h2>
          <p className="section-lead" data-reveal data-reveal-delay="2">
            佐潟公園前にある「暮らしの喫茶 ひとひ」。ほほのパンでつくるサンドやスープ、野草茶、コーヒーなどとともに、季節の手仕事やイベントも届けています。
          </p>
        </div>
        <div className="about-gallery" aria-label="店内の様子" data-reveal data-reveal-delay="3">
          <figure className="about-gallery__main">
            <Image
              src={assetPath("/images/about/08_cafe_counter.jpg")}
              alt="木のカウンターと白壁の店内"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </figure>
          <figure className="about-gallery__sub">
            <Image
              src={assetPath("/images/about/12_lifestyle_goods.jpg")}
              alt="木の棚に並ぶ暮らしの道具"
              fill
              sizes="(min-width: 768px) 20vw, 42vw"
            />
          </figure>
        </div>
        <ol className="feature-list" data-reveal data-reveal-delay="4">
          {features.map((feature) => (
            <li key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </li>
          ))}
        </ol>
        <div className="section-cta" data-reveal data-reveal-delay="5">
          <CtaLinks compact showMap={false} />
        </div>
      </div>
    </section>
  );
}
