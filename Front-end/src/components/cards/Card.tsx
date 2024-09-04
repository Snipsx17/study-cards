import { FC } from 'react';
import './Card.css';

interface Props {
  question: string;
  response: string;
  id: string;
  clickHandler: (id: string) => void;
  showIt?: boolean;
}

export const Card: FC<Props> = ({
  question,
  response,
  id,
  clickHandler,
  showIt,
}) => {
  return (
    <div className={`card-flip h-[250px] ${showIt ? 'flip' : ''}`}>
      <div className="card-flip-inner relative w-full h-full text-center">
        {/* question */}
        <div className="flex flex-col bg-slate-50 rounded-2xl drop-shadow-[0_0_3px_rgba(50,50,50,0.20)] p-8 pb-12 h-[250px] xl:w-full card-front">
          <div className=" grow flex items-center justify-center">
            <p className="text-4xl">{question}</p>
          </div>

          <button
            className="bg-purpleButton w-full text-slate-50 text-4xl py-3 rounded-xl"
            onClick={() => clickHandler(id)}
          >
            Show response
          </button>
        </div>
        {/* response */}
        <div className="flex flex-col rounded-2xl drop-shadow-[0_0_3px_rgba(50,50,50,0.20)] p-8 pb-12 h-[250px] xl:w-full card-back">
          <div className=" grow flex items-center justify-center">
            <p className="text-4xl">{response}</p>
          </div>
          <button
            className="bg-purpleButton text-slate-50 text-4xl py-3 rounded-xl"
            onClick={() => clickHandler('')}
          >
            Hide
          </button>
        </div>
      </div>
    </div>
  );
};
