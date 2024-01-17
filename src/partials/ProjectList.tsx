import { GradientText } from '../components/GradientText';
import { Project } from '../components/Project';
import { Section } from '../components/Section';
import { Tags } from '../components/Tags';

import {
  ColorTags
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Topics</GradientText> of interest
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="If We’re Living in a Simulation, The Gods Might Be Crazy"
        description="A look at the most relevant thoughts that could be addressed if we lived in a simulation."
        link="https://slate.com/technology/2022/06/this-but-again-computer-simulation-theories.html"
        img={{
          src: '/assets/images/SimulationTopic.webp',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>Artificial Intelligense</Tags>
            <Tags color={ColorTags.PURPLE}>Future</Tags>
            <Tags color={ColorTags.EMERALD}>Philosophy</Tags>
          </>
        }
      />
      <Project
        name="The Multiverse and Anthropic Principle are not enough"
        description="why are we all here?"
        link="https://blog.apaonline.org/2023/12/14/the-multiverse-and-anthropic-principle-are-not-enough/"
        img={{ src: '/assets/images/MultiverseTopic.jpeg', alt: 'Multiverse' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Multiverse</Tags>
            <Tags color={ColorTags.EMERALD}>Philosophy</Tags>
          </>
        }
      />
      <Project
        name="Forget Growth. Optimize for Resilience"
        description="You have to prepare, plan, and the way to do it is with the missing metric: resilience."
        link="https://www.wired.com/story/forget-growth-optimize-resilience/"
        img={{ src: '/assets/images/ResilienceTopic.webp', alt: 'Resilience Topic' }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>Tecnology</Tags>
            <Tags color={ColorTags.YELLOW}>Data Science</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
