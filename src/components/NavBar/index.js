import { useContext } from 'react';
import DateContext from '@context/DateContext';

function NavBar() {
  const { setDate, date } = useContext(DateContext);
  return (
    <div>
      <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
    </div>
  );
}

export default NavBar;
