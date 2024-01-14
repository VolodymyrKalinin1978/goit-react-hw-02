import { Container, Li } from './Options.styled';

export const Options = ({ totalFeedback, handleClick }) => {
  const feedBackBtn = ['good', 'neutral', 'bad', 'reset'];

  return (
    <Container>
      {feedBackBtn.map(feedBackBtns => (
        <Li key={feedBackBtns} isShow={totalFeedback}>
          <button type="button" name={feedBackBtns} onClick={handleClick}>
            {feedBackBtns.slice(0, 1).toUpperCase() + feedBackBtns.slice(1)}
          </button>
        </Li>
      ))}
    </Container>
  );
};
