import React, { ChangeEvent, useState } from "react";
import { AcceptEnum, DragDropFilesProps } from "./DragDropFilesTypes";

/**
 *
 * @param {object} props
 * @param {string[]} props.accept - `default: ["image"]` | `AcceptEnum:` "image", "video", "audio", "pdf", "doc", "docx", "csv"
 * @param {boolean} props.multiple - `default: false`
 * @returns {JSX.Element}
 */
export const DragDropFiles = ({
  accept = [AcceptEnum.image],
  multiple = false,
}: DragDropFilesProps): JSX.Element => {
  const [uploadData, setUploadData] = useState<File>();
  const [preview, setPreview] = useState("");

  const _onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target?.files?.length) return;

    const file = event.target.files[0];

    setUploadData(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <>
      <div>
        <input
          type="file"
          accept={accept.join(",")}
          multiple={multiple}
          value=""
          onChange={_onChangeFile}
        />
      </div>

      <div>
        <p>{uploadData?.name || ""}</p>
        {preview && <img src={preview} alt="preview" />}
      </div>
    </>
  );
};
