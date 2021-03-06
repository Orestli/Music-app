import React, {useRef} from 'react';
import FileUploadProps from "./FileUpload.props";

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}
                ref={ref}
                onChange={onChange}
                style={{display: "none"}}
            />
            {children}
        </div>
    );
};

export default FileUpload;