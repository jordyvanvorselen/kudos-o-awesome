import KudosInput from "./components/KudosInput";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    KudoStorage: state.contracts.KudoStorage,
    drizzleStatus: state.drizzleStatus,
  };
};

const KudosInputContainer = drizzleConnect(KudosInput, mapStateToProps);

export default KudosInputContainer;