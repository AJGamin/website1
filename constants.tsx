
import { HostingPlan, VPSPlan, Feature, Reward } from './types';

export const MEDIA = {
  LOGO_WEB: "https://cdn.discordapp.com/icons/1304092945779003522/0e756fe51bbc15c3a49e687cc27eb86e.webp?size=2048",
  
  // Videos
  VIDEO_1: "https://media.discordapp.net/attachments/1452158530453766255/1457285755935395985/Screen_Recording_20260104_132826_YouTube.mp4?ex=6988ee5f&is=69879cdf&hm=8a405aa23bc71fd7e1329ca6ee52e6a751fbbce611c09c3feff58b72e0c81dc7&",
  VIDEO_2: "https://media.discordapp.net/attachments/1452158530453766255/1457264160340574279/Screen_Recording_20260104_121434_YouTube.mp4?ex=6988da42&is=698788c2&hm=378cd87db902f22fc3afeb783a2c8ea354c53ee850ae40732e760d2afaa63ff4&",
  VIDEO_3: "https://media.discordapp.net/attachments/1437386050342359123/1467790160128114856/minecraft-aquarium.3840x2160.mp4?ex=6988e9dc&is=6987985c&hm=7dfe3ef78114ab012a26881c4a0b303dabb949f30752614143112b149d4e9b0e&",

  // Images
  IMG_PORTRAIT_1: "https://cdn.discordapp.com/attachments/1437386050342359123/1467790368404672572/wallpaper_minecraft_pc_bundle_1080x1920.png?ex=6988ea0e&is=6987988e&hm=ab9e4ab1228f8cb4a91198167d44fba9b19045c052a837640ba9fdb024a1deb0&",
  IMG_LANDSCAPE_2: "https://cdn.discordapp.com/attachments/1437386050342359123/1467790371097542833/Minecraft_Fall_Drop_Campaign_Key_Art_DotNet_Downloadable_Wallpaper_1920x1080.png?ex=6988ea0e&is=6987988e&hm=24babce7f4feae1c12ff574c5ce9524c6045471c26da053a0bb230f0b55cd8ea&",
  IMG_SQUARE_3: "https://cdn.discordapp.com/attachments/1437386050342359123/1467790403116990497/MCV_HOL25Drop_MoM_DotNet_Wallpaper_800x800.png?ex=6988ea16&is=69879896&hm=65281800cd92c8c15863602944f8600d89106ba2d522eef8179f122fe6632f66&",
  IMG_WIDE_4: "https://cdn.discordapp.com/attachments/1437386050342359123/1467790461916811274/MCV_SummerDrop_Hero_DotNet_Downloadable_Wallpaper_r800x450.png?ex=6988ea24&is=698798a4&hm=25605002179936b86ad4214f484922f0bad157ae60a3c532186b0a0f8b64433e&",
  IMG_SQUARE_5: "https://cdn.discordapp.com/attachments/1437386050342359123/1467790506565042298/MCV_SpringDrop_DotNet_Downloadable_Wallpaper_2048x2048.png?ex=6988ea2e&is=698798ae&hm=1836be991a76c9aabaf944a569e845717e73aa1be1344ce3f563706551d4d8e8&",
  IMG_SQUARE_6: "https://cdn.discordapp.com/attachments/1437386050342359123/1467790510994231409/Minecraft_TheGardenAwakens_DotNet_2048x2048.png?ex=6988ea30&is=698798b0&hm=ffd0d401a04ad5032a503466f27a0b8f6fa523d2b4f0663f8814c61eb82d30c6&",

  AVATAR_AJ: "https://cdn.discordapp.com/avatars/1023912262387367956/5df3e066b6e51081a9f0033f03665fac.png?size=1024",
  AVATAR_ANSH: "https://cdn.discordapp.com/attachments/1425378522591002674/1469898418993496225/d94788fd7156260.png?ex=69895514&is=69880394&hm=23d48e444074352faab3f48db9b774aaff2262210e826f6b910c3c996a1a2650&"
};

export const MINECRAFT_STANDARD: HostingPlan[] = [
  { id: 'std-dirt', name: 'Dirt', price: 20, ram: '2GB', cpu: '1 Core', storage: '10GB', extras: [] },
  { id: 'std-stone', name: 'Stone', price: 40, ram: '4GB', cpu: '2 Cores', storage: '20GB', extras: [] },
  { id: 'std-iron', name: 'Iron', price: 80, ram: '8GB', cpu: '3 Cores', storage: '30GB', extras: [] },
  { id: 'std-redstone', name: 'Redstone', price: 160, ram: '16GB', cpu: '4 Cores', storage: '40GB', extras: [], recommended: true },
  { id: 'std-gold', name: 'Gold', price: 320, ram: '32GB', cpu: '5 Cores', storage: '40GB', extras: [] },
  { id: 'std-emerald', name: 'Emerald', price: 480, ram: '48GB', cpu: '6 Cores', storage: '50GB', extras: [] },
  { id: 'std-netherite', name: 'Netherite', price: 640, ram: '64GB', cpu: '8 Cores', storage: '60GB', extras: [] },
];

export const MINECRAFT_PERFORMANCE: HostingPlan[] = [
  { id: 'perf-dirt', name: 'Performance Dirt', price: 40, ram: '2GB', cpu: 'High Frequency', storage: '10GB NVMe', extras: [] },
  { id: 'perf-stone', name: 'Performance Stone', price: 80, ram: '4GB', cpu: 'High Frequency', storage: '20GB NVMe', extras: [] },
  { id: 'perf-iron', name: 'Performance Iron', price: 160, ram: '8GB', cpu: 'High Frequency', storage: '30GB NVMe', extras: [] },
  { id: 'perf-redstone', name: 'Performance Redstone', price: 320, ram: '16GB', cpu: 'High Frequency', storage: '40GB NVMe', extras: [], recommended: true },
  { id: 'perf-gold', name: 'Performance Gold', price: 640, ram: '32GB', cpu: 'High Frequency', storage: '40GB NVMe', extras: [] },
  { id: 'perf-emerald', name: 'Performance Emerald', price: 960, ram: '48GB', cpu: 'High Frequency', storage: '50GB NVMe', extras: [] },
  { id: 'perf-netherite', name: 'Performance Netherite', price: 1280, ram: '64GB', cpu: 'High Frequency', storage: '60GB NVMe', extras: [] },
];

export const VPS_PLANS: VPSPlan[] = [
  { 
    id: 'vps-platinum-offer', 
    name: 'Xeon Platinum Offer', 
    cpu: 'Intel Xeon Platinum 8151', 
    ram: '64GB DDR4', 
    storage: '150GB NVMe SSD', 
    ip: 'Dedicated', 
    location: 'Mumbai, India', 
    network: '1GBPS', 
    price: 1200 
  }
];

export const FEATURES: Feature[] = [
  { title: "Fast Hardware", description: "Using latest AMD EPYC processors and DDR5 RAM for high performance.", icon: "Zap", color: "cyan" },
  { title: "DDoS Protection", description: "Advanced filtering to keep your server online during attacks.", icon: "Shield", color: "purple" },
  { title: "India Servers", description: "Servers located in Delhi to provide the lowest latency in India.", icon: "Globe", color: "cyan" },
  { title: "Expert Support", description: "Helpful support available 24/7 to solve your hosting issues.", icon: "Activity", color: "green" }
];

export const INVITE_REWARDS: Reward[] = [
  { emoji: "🎫", invites: 5, ram: "8GB", cpu: "2 Cores", storage: "15GB" }
];

export const BOOST_REWARDS: Reward[] = [
  { boosts: 1, ram: "4GB", cpu: "2 Cores", storage: "10GB" },
  { boosts: 2, ram: "8GB", cpu: "3 Cores", storage: "15GB" }
];
