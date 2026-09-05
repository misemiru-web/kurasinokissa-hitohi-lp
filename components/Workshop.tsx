import Image from "next/image";
import { CtaLinks } from "@/components/CtaLinks";
import { workshopExamples } from "@/lib/site-data";

export function Workshop() {
  return (
    <section
      className="section section--workshop"
      id="workshop"
      aria-labelledby="workshop-title"
    >
      <div className="container workshop-layout">
        <div className="workshop-copy">
          <p className="section-label" data-reveal data-reveal-delay="0">Workshop &amp; Lifestyle</p>
          <h2 id="workshop-title" data-reveal data-reveal-delay="1">
            <span className="workshop-title__line">手を動かす日も、</span>
            <span className="workshop-title__line">ひとひの時間。</span>
          </h2>
          <p className="section-lead" data-reveal data-reveal-delay="2">
            手を動かす時間や、季節を感じる体験を通して、日常の少し豊かになるきっかけをお届けします。
          </p>
          <p className="workshop-note" data-reveal data-reveal-delay="2">
            過去の開催例です。最新の内容はInstagramでご確認ください。
          </p>
        </div>
        <div className="workshop-gallery" aria-label="籐編みの手仕事" data-reveal data-reveal-delay="3">
          <figure className="workshop-gallery__main">
            <Image
              src="/images/workshop/18_rattan_weaving_workshop.jpg"
              alt="籐のラウンドプレートを編む手元"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </figure>
        </div>
        <div className="workshop-examples">
          <p className="workshop-examples__label" data-reveal data-reveal-delay="3">Past workshops</p>
          <h3 data-reveal data-reveal-delay="4">これまでの開催例</h3>
          <ul className="workshop-example-grid">
            {workshopExamples.map((example, index) => (
              <li
                className="workshop-example-card"
                key={example.name}
                data-reveal
                data-reveal-delay={index + 4}
              >
                <figure className="workshop-example-card__image">
                  <Image
                    src={example.image}
                    alt={example.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 116px"
                  />
                </figure>
                <p>{example.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="workshop-cta section-cta" data-reveal data-reveal-delay="8">
          <CtaLinks compact showMap={false} />
        </div>
      </div>
    </section>
  );
}
