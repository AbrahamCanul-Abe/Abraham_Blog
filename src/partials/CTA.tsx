import { GradientText } from '../components/GradientText';
import { Newsletter } from '../components/Newsletter';
import { Section } from '../components/Section';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Send me a <GradientText>message</GradientText>
        </>
      }
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate."
    />
  </Section>
);

export { CTA };
