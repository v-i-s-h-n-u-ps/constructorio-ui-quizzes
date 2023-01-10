import * as React from 'react';
import { useState } from 'react';
import CTAButton from './CTAButton';
import QuestionTitle from './QuestionTitle';
import QuestionDescription from './QuestionDescription';
import QuizContext from './Quiz/context';
import { QuestionOption } from '../types';
import { renderImages } from '../utils';
import { QuestionTypes } from './Quiz/actions';

interface Selected {
  [key: number]: boolean;
}

function SelectTypeQuestion() {
  const { dispatch, questionRespone } = React.useContext(QuizContext);
  const { next_question: question } = questionRespone;
  const { type } = question;
  const [selected, setSelected] = useState<Selected>({});
  const isDisabled = Object.keys(selected).length === 0;

  const toggleIdSelected = (id: number) => {
    if (type === QuestionTypes.SingleSelect) {
      setSelected({ [id]: true });
    } else if (type === QuestionTypes.MultipleSelect) {
      setSelected({ ...selected, [id]: !selected[id] });
    }
  };
  const onOptionKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      toggleIdSelected(id);
    }
  };

  const onNextClick = () => {
    if (dispatch && !isDisabled) {
      if (type === QuestionTypes.SingleSelect) {
        dispatch({
          type: QuestionTypes.SingleSelect,
          payload: Object.keys(selected).filter((key) => selected[Number(key)]),
        }!);
      } else {
        dispatch({
          type: QuestionTypes.MultipleSelect,
          payload: Object.keys(selected).filter((key) => selected[Number(key)]),
        }!);
      }
    }
  };

  React.useEffect(() => {
    setSelected({});
  }, [type]);

  return (
    <div className="select-question-container">
      <QuestionTitle title={question.title} />
      { question?.description ? <QuestionDescription description={question.description} /> : ''}
      <div className="question-options-container">
        { question?.options?.map((option: QuestionOption, index: number) => (
          <div
            className={`question-option-container ${selected[option.id] ? 'selected' : ''}`}
            onClick={() => { toggleIdSelected(option.id); }}
            onKeyDown={(event) => { onOptionKeyDown(event, option.id); }}
            role="button"
            tabIndex={index + 1}
            key={option.id}
          >
            { option.images && renderImages(option.images) }
            <p className="question-option-value">{ option?.value }</p>
          </div>
        ))}
      </div>
      <CTAButton
        disabled={isDisabled}
        ctaText={question?.cta_text || undefined}
        onClick={onNextClick}
      />
    </div>
  );
}

export default SelectTypeQuestion;
