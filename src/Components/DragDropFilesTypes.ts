export enum AcceptEnum {
  image = "image/*",
  video = "video/*",
  audio = "audio/*",
  pdf = ".pdf",
  doc = ".doc",
  docx = ".docx",
  csv = ".csv",
}

export type DragDropFilesProps = {
  accept?: AcceptEnum[];
  multiple?: boolean;
};
