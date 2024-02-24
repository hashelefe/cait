export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Generative Fill",
    route: "/transform/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Object Remove",
    route: "/transform/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Background Remove",
    route: "/transform/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Object Recolor",
    route: "/transform/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Image Restore",
    route: "/transform/add/restore",
    icon: "/assets/icons/image.svg",
  },
    {
      label: "Profile",
      route: "/profile",
      icon: "/assets/icons/profile.svg",
    },
    {
      label: "Buy Credits",
      route: "/credits",
      icon: "/assets/icons/stack.svg",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Budget",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 15,
      inclusions: [
        {
          label: "15 Free Credits",
          isIncluded: true,
        },
        {
          label: "Basic Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Standard Package",
      icon: "/assets/icons/pro-plan.svg",
      price: 15,
      credits: 60,
      inclusions: [
        {
          label: "60 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to All Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
      ],
    },
    {
      _id: 3,
      name: "Premium Package",
      icon: "/assets/icons/premium-plan.svg",
      price: 99,
      credits: 1000,
      inclusions: [
        {
          label: "1000 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to All Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Restore Image",
      subTitle: "Effortlessly enhance old, damaged, or low-resolution images to pristine quality. Our advanced algorithms meticulously repair imperfections, preserving the authenticity of your valuable memories with unmatched precision and clarity",
      config: { restore: true },
      icon: "image.svg",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Background Remove",
      subTitle: "Seamlessly eliminate backgrounds from images with precision and efficiency, leaving you with clean, transparent compositions. Say goodbye to tedious manual editing and hello to effortless, polished results, perfect for product photography, graphic design, and more",
      config: { removeBackground: true },
      icon: "camera.svg",
    },
    fill: {
      type: "fill",
      title: "Generative Fill",
      subTitle: "Effortlessly fill in missing areas of your images with realistic details, seamlessly blending with existing content for a flawless finish. Enhance productivity and unleash your imagination with our intuitive tool, perfect for retouching, composition, and design projects",
      config: { fillBackground: true },
      icon: "stars.svg",
    },
    remove: {
      type: "remove",
      title: "Object Remove",
      subTitle: "Eliminate unwanted elements from your photos with precision and ease, ensuring seamless integration with the background. Streamline your retouching process and achieve impeccable results, whether you're enhancing landscapes, portraits, or architectural compositions",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
    },
    recolor: {
      type: "recolor",
      title: "Object Recolor",
      subTitle: "Transform the color of objects in your photos with precision and simplicity, achieving vibrant results while maintaining natural tones. Whether you're adjusting product colors, enhancing visual impact, or exploring creative possibilities, our intuitive tool empowers you to bring your vision to life",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;