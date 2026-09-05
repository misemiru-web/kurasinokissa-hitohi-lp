"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { InstagramIcon, PinIcon } from "@/components/Icons";
import { assetPath } from "@/lib/asset-path";
import { externalLinks } from "@/lib/site-data";

const navigation = [
  { label: "ABOUT", href: "#about" },
  { label: "FOOD", href: "#food" },
  { label: "WORKSHOP", href: "#workshop" },
  { label: "INFO", href: "#info" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleDesktopResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleDesktopResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleDesktopResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="header-logo" href="#top" aria-label="ページ先頭へ戻る">
            <Image
              src={assetPath("/images/logo/header-logo.png")}
              alt="暮らしの喫茶 HITOHI"
              width={2172}
              height={724}
              priority
            />
          </a>

          <nav className="desktop-nav" aria-label="メインナビゲーション">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="desktop-header-actions">
            <a className="header-cta" href={externalLinks.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon className="header-cta__icon" />
              <span>最新の営業日を見る</span>
            </a>
            <a className="header-map-link" href={externalLinks.googleMaps} target="_blank" rel="noreferrer">
              <PinIcon />
              <span>Googleマップ</span>
            </a>
          </div>

          <div className="mobile-header-actions">
            <a
              className="header-cta header-cta--mobile"
              href={externalLinks.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="header-cta__icon" />
              <span>最新の営業日を見る</span>
            </a>
            <button
              ref={menuButtonRef}
              className="menu-toggle"
              type="button"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu-layer">
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="メニューを閉じる"
            onClick={closeMenu}
          />
          <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true">
            <nav className="mobile-menu__nav" aria-label="モバイルナビゲーション">
              {navigation.map((item, index) => (
                <a
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mobile-menu__actions">
              <a
                className="header-cta"
                href={externalLinks.instagram}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <InstagramIcon className="header-cta__icon" />
                <span>最新の営業日を見る</span>
              </a>
              <a
                className="header-map-link"
                href={externalLinks.googleMaps}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <PinIcon />
                <span>Googleマップで場所を見る</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
