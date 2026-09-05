import Image from "next/image";
import { CtaLinks } from "@/components/CtaLinks";
import { assetPath } from "@/lib/asset-path";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media">
        <Image
          src={assetPath("/images/hero/hitohi-hero-background.jpg")}
          alt="佐潟を望む窓辺に、サンドとスープ、コーヒーが並ぶ風景"
          fill
          priority
          sizes="100vw"
          className="hero__image"
        />
      </div>
      <div className="hero__copy-wrap">
        <div className="hero__copy">
          <p className="eyebrow">暮らしの喫茶 HITOHI / 佐潟公園前</p>
          <h1 id="hero-title">
            <span className="hero__title-line">佐潟のほとりで、</span>
            <span className="hero__title-line">食と自然を楽しむ。</span>
          </h1>
          <p className="hero__lead">
            薪窯パン舎ほほのパンでつくるサンドやスープ、野草茶やコーヒー。
            佐潟公園前の小さな喫茶です。
          </p>
          <CtaLinks compact />
        </div>
      </div>
    </section>
  );
}
