import {
  GithubIcon,
  LeetcodeIcon,
  LinkedInIcon,
} from "../../../assets/socialMedia";
import {
  GITHUB_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
} from "../../common/constants/socialNetworks.constants";

export const SocialNetworks = () => (
  <div>
    <div className="flex mt-6">
      <a href={GITHUB_URL} target="_blank" className="mr-4">
        <GithubIcon height={24} width={24} />
      </a>
      <a href={LINKEDIN_URL} target="_blank" className="mr-4">
        <LinkedInIcon height={24} width={24} />
      </a>
      <a href={LEETCODE_URL} target="_blank">
        <LeetcodeIcon height={24} width={24} />
      </a>
    </div>
  </div>
);
