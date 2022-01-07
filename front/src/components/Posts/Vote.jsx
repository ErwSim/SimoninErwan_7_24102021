/* eslint-disable no-unused-vars */
import {
  ThumbDown,
  ThumbDownOffAlt,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MessageContext } from "../../contextes";
import { VOTE_DEFINITION } from "../../definitions/vote.definition";
import { VoteService } from "../../services";

export default function Vote(props) {
  const { post, currentUser } = props;
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [currentUserVote, setCurrentUserVote] = useState(null);
  const voteService = new VoteService();
  const { setMessage } = useContext(MessageContext);

  useEffect(() => {
    (async () => {
      await fetchVotes();
    })();
  }, []);

  const fetchVotes = async () => {
    const votes = await voteService.getVotePost(post.id);
    const upvotesCount = votes.filter((vote) => vote.type === "UPVOTE").length;
    const downvotesCount = votes.filter(
      (vote) => vote.type === "DOWNVOTE"
    ).length;
    let currentUserVote =
      votes.find((vote) => vote.userId === currentUser.id)?.type ?? null;

    setUpvotes(upvotesCount);
    setDownvotes(downvotesCount);
    setCurrentUserVote(VOTE_DEFINITION[currentUserVote]);
  };

  const handleClick = (type) => {
    (async function vote() {
      try {
        let voteRes;
        if (type === currentUserVote) {
          voteRes = await voteService.removeVote(post.id, currentUser.id);
        } else {
          voteRes = await voteService.vote(post.id, currentUser.id, type);
        }

        if (voteRes) {
          setMessage({
            type: "success",
            message: "Vote effectué",
            time: 5000,
          });

          fetchVotes();
        }
      } catch (e) {
        setMessage({
          type: "error",
          message: "Une erreur est survenue",
          time: 5000,
        });

        console.error(e);
      }
    })();
  };

  return (
    <>
      <IconButton onClick={() => handleClick(VOTE_DEFINITION.UPVOTE)}>
        <Badge badgeContent={upvotes} color="secondary">
          {currentUserVote === VOTE_DEFINITION.UPVOTE ? (
            <ThumbUp></ThumbUp>
          ) : (
            <ThumbUpOffAlt></ThumbUpOffAlt>
          )}
        </Badge>
      </IconButton>
      <IconButton onClick={() => handleClick(VOTE_DEFINITION.DOWNVOTE)}>
        <Badge badgeContent={downvotes} color="secondary">
          {currentUserVote === VOTE_DEFINITION.DOWNVOTE ? (
            <ThumbDown></ThumbDown>
          ) : (
            <ThumbDownOffAlt></ThumbDownOffAlt>
          )}
        </Badge>
      </IconButton>
    </>
  );
}
