import React from "react";
import { applyBehavior } from "@/components/Behaviors/applyBehavior";
import {
  adminBehaviour,
  moderatorBehaviour,
} from "@/components/Behaviors/rbac-behaviors";

const ChatComponent = ({ canBanUser, canEditChannel }) => {
  return (
    <div>
      {canBanUser && <button>Ban User</button>}
      {canEditChannel && <button>Edit Channel</button>}
    </div>
  );
};

//  play with [] provided in applyBehavior: and the result in browser
//  ig: single behaviour -> [adminBehaviour]
//  ig: single behaviour -> [moderatorBehaviour]
//  ig: double behaviour -> [adminBehaviour, moderatorBehaviour]

const EnhancedChatComponent = applyBehavior(ChatComponent, [
  adminBehaviour,
  moderatorBehaviour,
]);

const RBAC = () => {
  return <EnhancedChatComponent />;
};

export default RBAC;
