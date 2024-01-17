//importar el componente GradientText
import { GradientText } from '../components/GradientText';
import { HeroAvatar } from '../components/HeroAvatar';
import { HeroSocial } from '../components/HeroSocial';
import { Section } from '../components/Section';
const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Abraham</GradientText> 👋
        </>
      }
      description={
        <>
        More than an average dev
         {' '}
        </>
      }
      avatar={

        <img
          className="h-82 w-64 rounded-full sm:mt-10"
          src="/assets/images/AvatarNoBg.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/AbrahamCanul-Abe" className="w-10 h-10">
            <HeroSocial
              src='/assets/images/icons8-github.svg'
              alt="GitHub icon"
            />
          </a>
          <a href="https://twitter.com/Abraham23Acc" className="w-10 h-10">
            <HeroSocial
              src='/assets/images/icons8-twitterx.svg'
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/abraham-canul-814093213/" className="w-10 h-10">
            <HeroSocial
              src='/assets/images/icons8-linkedin.svg'
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
