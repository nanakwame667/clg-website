interface Responsibility {
  id: number;
  title: string;
}

interface Career {
  id: number;
  title: string;
}

export interface TeamsProps {
  id: number;
  title: string;
  name: string;
  image: string;
  responsibility: Responsibility[];
  career: Career[];
}
