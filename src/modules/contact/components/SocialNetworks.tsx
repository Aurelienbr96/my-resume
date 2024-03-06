import {
  GITHUB_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
} from "../../common/constants/socialNetworks.constants";

export const SocialNetworks = () => (
  <div>
    <p className="text-3xl text-center mt-6">Usefull links</p>
    <div className="flex mt-6">
      <a href={GITHUB_URL} target="_blank" className="mr-4">
        Github
      </a>
      <a href={LINKEDIN_URL} target="_blank" className="mr-4">
        LinkedIn
      </a>
      <a href={LEETCODE_URL} target="_blank">
        LeetCode
      </a>
    </div>
  </div>
);
