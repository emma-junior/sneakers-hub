import nikeOneOne from "./images/nikeOne-one.webp"
import nikeOneTwo from "./images/nikeOne-two.webp";
import nikeOneThree from "./images/nikeOne-three.webp";
import nikeOneFour from "./images/nikeOne-four.webp";
import nikeTwoOne from "./images/nikeTwo-one.webp"
import nikeTwoTwo from "./images/nikeTwo-two.jpg";
import nikeTwoThree from "./images/nikeTwo-three.webp";
import nikeTwoFour from "./images/nikeTwo-four.webp";
import nikeThreeOne from "./images/nikeThree-one.webp"
import nikeThreeTwo from "./images/nikeThree-two.jpg";
import nikeThreeThree from "./images/nikeThree-three.webp";
import nikeThreeFour from "./images/nikeThree-four.webp";
import adidasOneOne from "./images/adidas One-one.webp"
import adidasOneTwo from "./images/adidas One-two.webp";
import adidasOneThree from "./images/adidas One-three.webp";
import adidasOneFour from "./images/adidas One-four.webp";
import adidasTwoOne from "./images/adidasTwo-one.webp";
import adidasTwoTwo from "./images/adidasTwo-two.webp";
import adidasTwoThree from "./images/adidasTwo-three.jpg";
import adidasTwoFour from "./images/adidasTwo-four.webp";
import adidasThreeOne from "./images/adidasThree-one.webp";
import adidasThreeTwo from "./images/adidasThree-two.webp";
import adidasThreeThree from "./images/adidasThree-three.webp";
import adidasThreeFour from "./images/adidasThree-four.webp";
import adidasFourOne from "./images/adidasFour-One.webp";
import adidasFourTwo from "./images/adidasFour-Two.webp";
import adidasFourThree from "./images/adidasFour-Three.webp";
import adidasFourFour from "./images/adidasFour-Four.webp";
import adidasFiveOne from "./images/adidasFive-one.webp";
import adidasFiveTwo from "./images/adidasFive-two.webp";
import adidasFiveThree from "./images/adidasFive-three.webp";
import adidasFiveFour from "./images/adidasFive-four.webp";
import adidasSixOne from "./images/adidasSix-one.jpg";
import adidasSixTwo from "./images/adidasSix-two.jpg";
import adidasSixThree from "./images/adidasSix-three.webp";
import adidasSixFour from "./images/adidasSix-four.webp";
import adidasSevenOne from "./images/adidasSeven-one.jpg";
import adidasSevenTwo from "./images/adidasSeven-two.webp";
import adidasSevenThree from "./images/adidasSeven-three.webp";
import adidasSevenFour from "./images/adidasSeven-four.webp";
import adidasEightOne from "./images/adidasEight-one.jpg";
import adidasEightTwo from "./images/adidasEight-two.jpg";
import adidasEightThree from "./images/adidasEight-three.webp";
import adidasEightFour from "./images/adidasEight-four.jpg";
import adidasNineOne from "./images/adidasNine-one.webp";
import adidasNineTwo from "./images/adidasNine-two.webp";
import adidasNineThree from "./images/adidasNine-three.webp";
import adidasNineFour from "./images/adidasNine-four.webp";
import adidasTenOne from "./images/adidasTen-one.webp";
import adidasTenTwo from "./images/adidasTen-two.webp";
import adidasTenThree from "./images/adidasTen-three.webp";
import adidasTenFour from "./images/adidasTen-four.webp";
import adidasElevenOne from "./images/adidasEleven-one.webp";
import adidasElevenTwo from "./images/adidasEleven-two.jpg";
import adidasElevenThree from "./images/adidasEleven-three.webp";
import adidasElevenFour from "./images/adidasEleven-four.webp";
import adidasTwelveOne from "./images/adidasTwelve-one.webp";
import adidasTwelveTwo from "./images/adidasTwelve-two.jpg";
import adidasTwelveThree from "./images/adidasTwelve-three.webp";
import adidasTwelveFour from "./images/adidasTwelve-four.webp";
import adidasThirteenOne from "./images/adidasThirteen-one.webp";
import adidasThirteenTwo from "./images/adidasThirteen-two.webp";
import adidasThirteenThree from "./images/adidasThirteen-three.webp";
import adidasThirteenFour from "./images/adidasThirteen-four.webp";
import adidasFourteenOne from "./images/adidasFourteen-one.webp";
import adidasFourteenTwo from "./images/adidasFourteen-two.webp";
import adidasFourteenThree from "./images/adidasFourteen-three.webp";
import adidasFourteenFour from "./images/adidasFourteen-four.webp";



const initialState = {
  product: [
    {
      id: 1,
      title: "NMD_R1 SHOES",
      description:
        "Stand out in the concrete jungle. Inspired by an acclaimed '80s runner from the adidas archives, these NMD_R1 Shoes provide a sock-like fit with a stretchy and supportive knit upper. Energy-returning Boost cushioning provides all-day comfort, and midsole plugs on the sides stand out as the recognisable mark of iconic NMD style. And if that isn't enough to draw some attention, the chic colours sure will.",
      price: 120,
      images: {
        imageOne: nikeThreeOne,
        imageTwo: nikeThreeTwo,
        imageThree: nikeThreeThree,
        imageFour: nikeThreeFour,
      },
      slug: "NMD-R1-SHOES",
    },
    {
      id: 2,
      title: "NMD_R1 V2 SHOES",
      description:
        "Time isn't slowing down. If anything, it seems to be moving at hyper-speed. And since the adidas NMD_R1 shoes are built on a foundation of speed, it only makes sense that these would be the perfect thing to lace into while you hold the pace of the day. The overlays add a futuristic edge to the streamlined silhouette. BOOST cushioning makes every step feel like a good one — which is great since you're not slowing down either.",
      price: 120,
      images: {
        imageOne: nikeOneOne,
        imageTwo: nikeOneTwo,
        imageThree: nikeOneThree,
        imageFour: nikeOneFour,
      },
      slug: "NMD-R1-V2-SHOES",
    },
    {
      id: 3,
      title: "ZX 2K BOOST 2.0",
      description:
        "Inspired by the digital and tactile satisfaction of our everyday. Reflective pops define the tech upper of the ZX 2K BOOST 2.0. Lace in, let the softness embrace your feet. The cushioning of wrapped Boost brings satisfaction to every step.",
      price: 100,
      images: {
        imageOne: nikeTwoOne,
        imageTwo: nikeTwoTwo,
        imageThree: nikeTwoThree,
        imageFour: nikeTwoFour,
      },
      slug: "ZX-2K-BOOST 2.0",
    },
    {
      id: 4,
      title: "Adidas continental 80 shoe",
      description:
        "Revel in the nostalgia. These adidas Continental 80 shoes capture all the retro vibes of the classic '80s leather trainers. The split rubber cupsole and swooping two-tone stripe nail the look. French terry lining completes the throwback feel.",
      price: 100,
      images: {
        imageOne: adidasOneOne,
        imageTwo: adidasOneTwo,
        imageThree: adidasOneThree,
        imageFour: adidasOneFour,
      },
      slug: "Adidas-continental-80-shoe",
    },
    {
      id: 5,
      title: "SHOWTHEWAY SHOES",
      description:
        "The stretch-mesh upper of these shoes delivers a snug and breathable fit while midsole cushioning cradles your foot from heel-strike to toe-off. The slim design features an adidas logo on the tongue and 3-Stripes elements along the midfoot to complete the adidas running look.",
      price: 70,
      images: {
        imageOne: adidasTwoOne,
        imageTwo: adidasTwoTwo,
        imageThree: adidasTwoThree,
        imageFour: adidasTwoFour,
      },
      slug: "SHOWTHEWAY-SHOES",
    },
    {
      id: 6,
      title: "ULTIMASHOW SHOES",
      description:
        "Eliminate the noise. As you push yourself, all you can think about is your movement and your breath. And that you're doing it. The rest falls away. Move fast. Move slow. Just move. And do it in these adidas running shoes. They're lightweight, cushioned and ready to roll.",
      price: 75,
      images: {
        imageOne: adidasThreeOne,
        imageTwo: adidasThreeTwo,
        imageThree: adidasThreeThree,
        imageFour: adidasThreeFour,
      },
      slug: "ULTIMASHOW-SHOES",
    },
    {
      id: 7,
      title: "OZWEEGO SHOES",
      description:
        "The future? Who knows what could happen. One thing is for sure, though. You're gonna look fresh no matter what. Inspired by bold running shoe silhouettes of the '90s and '00s, these adidas OZWEEGO Shoes stand out with an eye-catching midsole. The soft leather upper and Adiprene cushioning combine for sleek style that's comfortable too.",
      price: 100,
      images: {
        imageOne: adidasFourOne,
        imageTwo: adidasFourTwo,
        imageThree: adidasFourThree,
        imageFour: adidasFourFour,
      },
      slug: "OZWEEGO-SHOES",
    },
    {
      id: 8,
      title: "RICH MNISI ULTRABOOST",
      description:
        "Rich Mnisi is a South African designer who takes inspiration from outside the realm of fashion, from film to music to nature. In this collaboration with adidas, he adds his label's iconic animal prints to the Ultraboost running shoes. From the adidas PRIMEKNIT upper down to the BOOST midsole, the design comes alive with a story of a place where animals and city life collide.",
      price: 150,
      images: {
        imageOne: adidasFiveOne,
        imageTwo: adidasFiveTwo,
        imageThree: adidasFiveThree,
        imageFour: adidasFiveFour,
      },
      slug: "RICH-MNISI-ULTRABOOST",
    },
    {
      id: 9,
      title: "NMD_R1 PRIMEBLUE",
      description:
        "Pack your bag, lace up and get going. City adventures beckon in these NMD_R1 shoes. An update to an acclaimed '80s runner from the adidas archive, these modern trainers have a soft, stretchy knit upper and energy-returning Boost cushioning for all-day comfort. Bold colour and signature midsole plugs make a statement, so wherever you're headed, you're sure to show up in style. This product is made with Primeblue, a high-performance recycled material made in part with Parley Ocean Plastic. 50% of the upper is textile, 75% of the textile is Primeblue yarn. No virgin polyester.",
      price: 100,
      images: {
        imageOne: adidasSixOne,
        imageTwo: adidasSixTwo,
        imageThree: adidasSixThree,
        imageFour: adidasSixFour,
      },
      slug: "NMD_R1-PRIMEBLUE",
    },
    {
      id: 10,
      title: "RETROPY E5 SHOES",
      description:
        "You don't mess around when it comes to style. Your look is classic yet bold, and that's just how you like it. Running-inspired but made for everyday wear, these adidas Retropy E5 Shoes have a premium material-mix design that's easy to dress up or down. So go ahead, pair them with your favourite jeans or your favourite sweats. Either way, Boost cushioning adds comfort to every step.",
      price: 90,
      images: {
        imageOne: adidasSevenOne,
        imageTwo: adidasSevenTwo,
        imageThree: adidasSevenThree,
        imageFour: adidasSevenFour,
      },
      slug: "RETROPY-E5-SHOES",
    },
    {
      id: 11,
      title: "SUPERNOVA CUSHION",
      description:
        "You don't have to spend hours online searching for those vintage 2000s kicks. Just lace up in these adidas Supernova Cushion 7 Shoes and you're good to go. An authentic reissue of an archival runner from the early 2000s, this pair flashes pure aughts style, from the printed 3-Stripes to the mesh upper. An EVA midsole gives them a smooth, comfortable feel.",
      price: 80,
      images: {
        imageOne: adidasEightOne,
        imageTwo: adidasEightTwo,
        imageThree: adidasEightThree,
        imageFour: adidasEightFour,
      },
      slug: "SUPERNOVA-CUSHION",
    },
    {
      id: 12,
      title: "SUPERSTAR SHOES",
      description:
        "Originally made for basketball courts in the '70s. Celebrated by hip hop royalty in the '80s. The adidas Superstar shoe is now a lifestyle staple for streetwear enthusiasts. The world-famous shell toe feature remains, providing style and protection. Just like it did on the B-ball courts back in the day. Now, whether at a festival or walking in the street you can enjoy yourself without the fear of being stepped on. The serrated 3-Stripes detail and adidas Superstar box logo adds OG authenticity to your look.",
      price: 85,
      images: {
        imageOne: adidasNineOne,
        imageTwo: adidasNineTwo,
        imageThree: adidasNineThree,
        imageFour: adidasNineFour,
      },
      slug: "SUPERSTAR-SHOES",
    },
    {
      id: 13,
      title: "OZNOVA SHOES",
      description:
        "You like to take things to the next level. Lucky for you, so do these adidas Oznova Shoes. Built with Adiplus cushioning, they're the evolution of comfort, bringing ease to every step. As bold as they are comfortable, they flaunt eye-catching proportions, a layered-looking upper and an unexpected futuristic lTen",
      price: 100,
      images: {
        imageOne: adidasTenOne,
        imageTwo: adidasTenTwo,
        imageThree: adidasTenThree,
        imageFour: adidasTenFour,
      },
      slug: "OZNOVA-SHOES",
    },
    {
      id: 14,
      title: "TRAE YOUNG 1 SHOES",
      description:
        "The Trae Young 1 Shoes from adidas Basketball and Trae Young combine Trae's unmatched look and unique style of play with the ultimate in agility, containment and comfort. Each colourway in Young's signature shoe debut collection captures his distinctive flair and personality while also providing the top technologies in B-ball footwear.",
      price: 110,
      images: {
        imageOne: adidasElevenOne,
        imageTwo: adidasElevenTwo,
        imageThree: adidasElevenThree,
        imageFour: adidasElevenFour,
      },
      slug: "TRAE-YOUNG-1-SHOES",
    },
    {
      id: 15,
      title: "SWIFT RUN 22 SHOES",
      description:
        "Rooted in running but designed for the daily grind, these trainers keep you comfortable with a supportive knit mesh upper and a cushioned EVA midsole. Oh, and they look good too. Win win. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
      price: 70,
      images: {
        imageOne: adidasTwelveOne,
        imageTwo: adidasTwelveTwo,
        imageThree: adidasTwelveThree,
        imageFour: adidasTwelveFour,
      },
      slug: "SWIFT-RUN-22-SHOES",
    },
    {
      id: 16,
      title: "X9000L4 SHOES",
      description:
        "A responsive JETBOOST midsole offers the ultimate blend of support and energy return while the adidas PRIMEKNIT upper adapts to your every move. Charge through shorter runs in the city, then show off high-visibility style wherever you go next. Made with a series of recycled materials, this upper features at least 50% recycled content.",
      price: 120,
      images: {
        imageOne: adidasThirteenOne,
        imageTwo: adidasThirteenTwo,
        imageThree: adidasThirteenThree,
        imageFour: adidasThirteenFour,
      },
      slug: "X9000L4-SHOES",
    },
    {
      id: 17,
      title: "FORUM LOW SHOES",
      description:
        "As we move towards the future, the evolution of this icon is rooted in the classic elements you covet: signature ankle strap, X-detail and lots of B-ball-inspired vibes. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
      price: 90,
      images: {
        imageOne: adidasFourteenOne,
        imageTwo: adidasFourteenTwo,
        imageThree: adidasFourteenThree,
        imageFour: adidasFourteenFour,
      },
      slug: "FORUM-LOW-SHOES",
    },
  ],
  cart: [],
  currentItem: null,
};

export default initialState
