import noun_cry_2257022 from './../images/noun_cry_2257022.svg';
import noun_Happy_2257035 from './../images/noun_Happy_2257035.svg';

const getSmileFace = mood => {
	if (mood === ':)') {
		return noun_Happy_2257035;
	} else if (mood === ':(') {
		return noun_cry_2257022;
	}
};

export default getSmileFace;
