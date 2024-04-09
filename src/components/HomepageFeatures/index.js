import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'A Layer 1 Blockchain',
    Svg: require('@site/static/img/7-Cross-industry-icon.svg').default,
    description: (
      <>
        eSync Network is the foundational layer of our blockchain’s network with unparalleled security, scalability, and reliability.
      </>
    ),
  },
  {
    title: 'EVM Compatible',
    Svg: require('@site/static/img/3-EVM-icon.svg').default,
    description: (
      <>
        Built on EVM, eSync Network promotes innovation and flexibility with wide compatibility across existing blockchains.
      </>
    ),
  },
  {
    title: 'Real World Use',
    Svg: require('@site/static/img/2-Real-world-icon.svg').default,
    description: (
      <>
        Our cutting-edge blockchain tech blends seamlessly into everyday life, revolutionizing industries globally. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
