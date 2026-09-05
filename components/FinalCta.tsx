import { CtaLinks } from "@/components/CtaLinks";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta__inner">
        <p className="section-label" data-reveal data-reveal-delay="0">Latest Information</p>
        <h2 id="final-cta-title" data-reveal data-reveal-delay="1">
          <span className="final-cta-title__line">今日のひとひを、</span>
          <span className="final-cta-title__line">Instagramで。</span>
        </h2>
        <p data-reveal data-reveal-delay="2">
          営業日やイベントの最新情報は、公式Instagramからご確認ください。
        </p>
        <CtaLinks light revealDelay={3} />
      </div>
    </section>
  );
}
