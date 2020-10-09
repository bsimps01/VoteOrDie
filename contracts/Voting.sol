pragma solidity ^0.5.16;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;

    uint public candidatesCount;

    constructor () public {
        addCandidate("Agent Orange");
        addCandidate("Sleepy Moe");
        addCandidate("Old Flanders");
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}