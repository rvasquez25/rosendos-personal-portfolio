import tipCalc from "../assets/tipCalc.png";
import dictAttack from "../assets/dictionaryAttack.png"
import randAttack from "../assets/randomAttack.png"
import { faGithub, faReact, faGoogle, faJava, faSwift } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let list1 = [<a href="https://github.com/rvasquez25/codepath-prework" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>, <FontAwesomeIcon icon={faSwift}/>, <FontAwesomeIcon icon={faGoogle} />]
let list2 = [<a href="https://github.com/rvasquez25/personal-projects/tree/main/computer-security/dictionary-attack" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>, <FontAwesomeIcon icon={faJava} />]
let list3 = [<a href="https://github.com/rvasquez25/personal-projects/tree/main/computer-security/random-attack(brute-force)" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>, <FontAwesomeIcon icon={faJava} />]
export const ProjectInProgress = [
  {
    name: "iOS App Development Calculator",
    image: tipCalc,
    skills: "Swift, xcode 12, ",
    icons: list1,
  },
  {
    name: "Computer Security - Dictionary Attack",
    image: dictAttack,
    skills: "Java",
    icons: list2,
  },
  {
    name: "Computer Security - Brute Force Attack",
    image: randAttack,
    skills: "Java",
    icons: list3,
  }
];