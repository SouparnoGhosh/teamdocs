import React from "react";
import GoogleDocsOutlineIcon from "@/assets/icons/GoogleDocsOutlineIcon";
import MoreVerticalMenu from "@/components/common/MoreVerticalMenu";
import DocPreviewWithContextMenu from "@/components/common/DocPreviewWithContextMenu";

const DocumentCard: React.FC = () => {
  return (
    <div className="flex flex-col h-full border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative bg-gradient-to-r from-card to-card p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-3">
            <div className="bg-background p-2 rounded-full shadow-sm">
              <GoogleDocsOutlineIcon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col justify-end">
              <h3 className="text-sm font-medium text-card-foreground">
                Document name
              </h3>
              <p className="text-xs text-muted">Updated 2 days ago</p>
            </div>
          </div>
          <MoreVerticalMenu />
        </div>
      </div>
      <DocPreviewWithContextMenu />
    </div>
  );
};

export default DocumentCard;