export interface StoryContent {
  title: string;
  content: string;
  moralOfStory?: string;
  chapters?: {
    title: string;
    content: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: 'READ_STORY' | 'COMPLETE_QUIZ' | 'COLLECT_ITEMS' | 'VISIT_COUNT';
  progress?: number;
  maxProgress?: number;
}

export interface StoryProgress {
  lastReadTimestamp: number;
  completedChapters: string[];
  achievements: Achievement[];
  collectedItems: string[];
  quizScores: Record<string, number>;
}

export interface InteractiveScene {
  id: string;
  type: 'AR' | 'VR' | '3D';
  modelUrl: string;
  interactions: {
    trigger: string;
    action: string;
    animation?: string;
  }[];
}

export interface Story {
  id: string;
  translations: Record<string, StoryContent>;
  image: string;
  genre: 'fantasy' | 'adventure' | 'mystery' | 'fairytale' | 'educational' | 'mythology' | 'science';
  ageGroup: 'children' | 'young' | 'all';
  mood: 'happy' | 'exciting' | 'calm' | 'mysterious' | 'funny' | 'dramatic';
  interactiveElements?: {
    choices?: {
      text: string;
      nextSceneId: string;
    }[];
    minigames?: {
      type: 'wordSearch' | 'quiz' | 'memory' | 'dragAndDrop';
      config: any;
    }[];
    animations?: {
      type: string;
      trigger: string;
      duration: number;
    }[];
    collectibles?: {
      id: string;
      name: string;
      image: string;
      description: string;
      hint: string;
      location: string;
    }[];
    arScenes?: InteractiveScene[];
    voiceCommands?: {
      command: string;
      action: string;
    }[];
  };
  backgroundColor?: string;
  soundEffects?: {
    background?: string;
    effects?: Record<string, string>;
    voiceActing?: Record<string, string>;
  };
  readingLevel: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadingTime: number;
  keywords: string[];
  characters?: {
    name: string;
    avatar: string;
    description: string;
    voiceActor?: string;
    animations?: {
      idle: string;
      talking: string;
      reactions: Record<string, string>;
    };
  }[];
  accessibility?: {
    signLanguageVideo?: string;
    altTextDescriptions?: Record<string, string>;
    colorBlindMode?: boolean;
    dyslexicFont?: boolean;
  };
  parentalControls?: {
    contentWarnings?: string[];
    ageRating: string;
    educationalValue?: string[];
    supervisedActivities?: string[];
  };
  rewards?: {
    achievements: Achievement[];
    unlockables: {
      id: string;
      type: 'character' | 'scene' | 'minigame' | 'story';
      condition: string;
      content: any;
    }[];
  };
  progression?: {
    chapters: {
      id: string;
      title: string;
      requirements?: string[];
    }[];
    skillTree?: {
      nodes: {
        id: string;
        title: string;
        description: string;
        requirements: string[];
        rewards: string[];
      }[];
      edges: [string, string][];
    };
  };
}

export interface StoryContentProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onPlayAudio: () => void;
  isPlaying: boolean;
}

export type SupportedLanguage = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'zh' | 'ja' | 'ko' | 'ar' | 'ru';