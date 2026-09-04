import Image from "next/image";
import { CtaLinks } from "@/components/CtaLinks";
import { menuItems } from "@/lib/site-data";

export function Food() {
  return (
    <section className="section section--food" id="food" aria-labelledby="food-title">
      <div className="container">
        <div className="food-panel">
          <div className="section-heading section-heading--wide">
            <div>
              <p className="section-label" data-reveal data-reveal-delay="0">Food &amp; Drink</p>
              <h2 id="food-title" data-reveal data-reveal-delay="1">
                <span className="food-title__line">薪窯パンと、</span>
                <span className="food-title__line">からだにうれしいひと皿。</span>
              </h2>
            </div>
            <p data-reveal data-reveal-delay="2">
              食事にも、散策の前後のひと休みにも。
              <br />
              素材の表情が見えるごはんとおやつを。
            </p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <article
                className={`menu-item ${index === 0 ? "menu-item--featured" : "menu-item--secondary"}`}
                key={item.name}
                data-reveal
                data-reveal-delay={index + 3}
              >
                <div className="menu-item__image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1040px) 40vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectPosition: item.position }}
                  />
                  {index === 0 && (
                    <span className="menu-item__recommendation">
                      当店
                      <br />
                      おすすめ
                    </span>
                  )}
                </div>
                <div className="menu-item__copy">
                  <h3>
                    {item.name === "デーツあんバターサンド" ? (
                      <>
                        デーツあんバター
                        <br className="menu-item__mobile-break" />
                        サンド
                      </>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="food-note" data-reveal data-reveal-delay="7">
            <p className="food-categories">
              スープ&nbsp; / &nbsp;野草茶&nbsp; / &nbsp;コーヒー&nbsp; / &nbsp;スムージー&nbsp; / &nbsp;ブリスボール など
            </p>
            <p>
              メニュー・営業内容は変更になる場合があります。最新情報はInstagramをご確認ください。
            </p>
          </div>
          <div className="section-cta" data-reveal data-reveal-delay="8">
            <CtaLinks compact showMap={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
