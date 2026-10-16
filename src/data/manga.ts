import coldTea1 from "../assets/manga/cold-tea-1.png";
import coldTea2 from "../assets/manga/cold-tea-2.png";
import coldTea3 from "../assets/manga/cold-tea-3.png";
import coldTea4 from "../assets/manga/cold-tea-4.png";
import stupidCode1 from "../assets/manga/stupid-code-1.png";
import stupidCode2 from "../assets/manga/stupid-code-2.png";
import stupidCode3 from "../assets/manga/stupid-code-3.png";
import stupidCode4 from "../assets/manga/stupid-code-4.png";

export interface Manga {
  /** Read out to screen readers as "Manga panel: <title>" */
  title: string;
  /** Shown left to right (stacked on mobile). The alt describes each panel. */
  panels: { src: ImageMetadata; alt: string }[];
}

export const coldTea: Manga = {
  title: "Cold tea",
  panels: [
    {
      src: coldTea1,
      alt: "A chibi developer girl in a cat-eared hoodie tries to sip tea and immediately spits it out, sweating in shock. A speech bubble says, “AGH—TOO HOT!”",
    },
    {
      src: coldTea2,
      alt: "The chibi girl developer sits hunched at her laptop with spiral “hypnotized” eyes, typing rapidly (“TAP TAP”). A steaming mug sits beside her. A thought bubble says, “I’LL WAIT A BIT. AND FIX THIS LITTLE BUG…”",
    },
    {
      src: coldTea3,
      alt: "Text at the top says, “3 HOURS LATER…” The girl shivers while taking another sip from the mug. “BRR…” appears near her, and a thought bubble says, “IT’S ICE COLD NOW!”",
    },
    {
      src: coldTea4,
      alt: "The girl stands near a microwave holding the mug, looking tired and upset with a resigned expression. A thought bubble says, “HERE WE GO AGAIN.”",
    },
  ],
};

export const stupidCode: Manga = {
  title: "Stupid code",
  panels: [
    {
      src: stupidCode1,
      alt: "Blue-haired dev girl in a cat hoodie studies her laptop in confusion. Thought bubble: “THIS CODE DOESN’T MAKE ANY SENSE.” Background text: “STAAARE.”",
    },
    {
      src: stupidCode2,
      alt: "She erupts in exaggerated frustration, yelling with a huge open mouth and anger marks on her face. Speech bubble: “WHAT KIND OF IDIOT WROTE THIS CODE?!”",
    },
    {
      src: stupidCode3,
      alt: "A dramatic black-and-white reveal card reads: “Devchan, 3 years ago - quick fix.”",
    },
    {
      src: stupidCode4,
      alt: "She freezes in embarrassed realization, wearing a blank, dead-eyed expression. Thought bubble: “OH. ME.”",
    },
  ],
};
