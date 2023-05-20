import paper from './assets/images/icon-paper.svg'
import scissors from './assets/images/icon-scissors.svg';
import rock from './assets/images/icon-rock.svg';
import spock from './assets/images/icon-spock.svg';
import lizard from './assets/images/icon-lizard.svg';

export const data = [
    {
        "name":"paper",
        "image":paper,
        "beats":['rock','spock']

    },
    {
        "name":"scissors",
        "image":scissors,
        "beats":['paper','lizard']

    },
    {
        "name":"rock",
        "image":rock,
        "beats":['scissors','lizard']

    },
    {
        "name":"spock",
        "image":spock,
        "beats":['scissors','rock']

    },
    {
        "name":"lizard",
        "image":lizard,
        "beats":['spock','paper']

    },
]