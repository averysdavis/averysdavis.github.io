import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            I&apos;m a {profile.role.toLowerCase()} at{' '}
            <a href="https://khanlabschool.org/" className="hero-highlight">
              {profile.employer}
            </a>{' '}
            where I lead both the KhanLab-BayArea{' '}
            <a href="https://igem.org/" className="hero-highlight">
              iGEM
            </a>{' '}
            team and the Speech and Debate team. I&apos;m interested in
            synthetic biology, computer science, engineering, plants, and more!
          </p>

          <div className="hero-cta">
            <Link href="/writing/about" className="button">
              About Me
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
