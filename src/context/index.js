import HashTagProvider from "./hashTagProvider";
import TweetsProvider from "./tweetsProvider";
import UserFollowerProvider from "./userFollowerProvider";


function ContextProviders({ children }) {
  return (
    <UserFollowerProvider>
      <HashTagProvider>
          <TweetsProvider>
            {children}
          </TweetsProvider>
      </HashTagProvider>
    </UserFollowerProvider>
  );
}

export default  ContextProviders;