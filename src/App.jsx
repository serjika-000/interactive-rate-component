import { useState } from 'react'
import './App.css';
import Rating from './components/Rating';
import ThankYou from './components/ThankYou'

function App() {
  const [showThankyouPage, setShowThankyouPage] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <>
      {showThankyouPage ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThankyouPage={setShowThankyouPage}
        />
    )}
  </>
  );
}

export default App;
