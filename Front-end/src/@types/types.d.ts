// CONTEXT

export interface AuthContextType {
  isLogged: boolean;
  login: (id: string) => void;
  logout: () => Promise<void>;
}

export interface AuthContextProps {
  children: ReactNode;
  initiallyLogged: boolean;
}

export interface OverlayContextProps {
  isVisible: boolean;
  content: ReactNode | null;
}

export interface OverlayProviderProps extends OverlayContextProps {
  showOverlay: (content: ReactNode) => void;
  hideOverlay: () => void;
}

export interface User {
  user: string | null;
}

export interface UserContextProps {
  user: string | null;
  loadUserData?: (user: { user: string }) => void;
}

export interface MenuContext {
  showAsideMenu: () => void;
  hideAsideMenu: () => void;
  asideMenuIsVisible: boolean;
}

export type DataFetch = {
  [key: string]: any;
};

export type errorMessage = {
  message: string;
};

export type requestMethods = 'get' | 'post' | 'delete' | 'put';

export interface FetchI {
  data: null | DataFetch;
  isFetching: boolean;
  hasError: boolean;
  error: null | errorMessage;
  getFetch: (url: string, method: requestMethods, body?: {}) => Promise<void>;
  setError: (errorMessage: string) => void;
}

export interface Card {
  _id: string;
  question: string;
  response: string;
  category: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface User {
  user: string | null;
  email: string | null;
}

export interface userData {
  user: User;
  cards: Card[];
}

export interface getCardsState {
  loading: boolean;
  error: null | string;
  data: null | Card[];
}

export interface userCardsI extends getCardsState {
  setError: (error: string) => void;
  fetchCards: (refreshToken: string) => Promise<void>;
}

// COMPONENTS PROPS

export interface CardProps {
  question: string;
  response: string;
  id: string;
  clickHandler: (id: string) => void;
  showIt?: boolean;
}

export interface SubmitButtonProps {
  principal?: boolean;
  children: string;
  type?: string;
  onClick?: () => void;
  isFetching?: boolean;
}

export interface CategorySelectorProps {
  label: string;
  categories: string[];
}

export interface InputProps {
  type: string;
  placeHolder?: string;
  label?: string;
  value: string;
  name: string;
  Icon?: ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextAreaProps {
  placeHolder?: string;
  label?: string;
  value: string;
  name: string;
  size: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface UserNameProps {
  userName: string;
}

export interface StateMessageProps {
  error: string | null;
  loading: boolean;
  cards: boolean;
}

export interface ButtonProps {
  principal?: boolean;
  text: string;
  styles?: string;
  type?: string;
  onClick?: () => void;
}

export interface MessageProp {
  children: ReactNode;
}

export interface OverlayProps {
  visible: boolean;
  handleClick?: (isVisible: boolean) => void;
  children?: React.ReactNode;
}

export interface UserProfileProps {
  userName: string;
}
