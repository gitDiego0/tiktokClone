import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clsx from 'clsx'
import styles from './styles.module.css'
import { uploadVideo } from '../../services'

export default function Upload() {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const onDrop = (files) => {
    const [file] = files
    setUploading(true)
    uploadVideo(file)
    setUploaded(true)
  }
  const { isDragAccept, isDragReject, getRootProps, getInputProps } =
    useDropzone({
      disabled: uploading || uploaded,
      maxFiles: 1,
      accept: 'video/mp4, video/x-m4v, video/x',
      onDrop,
    })

  useEffect(() => {
    if (isDragReject) navigator.vibrate(100)
  }, [isDragReject])

  const dndClassNames = clsx(styles.dnd, {
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept,
  })

  const renderDndContent = () => {
    if (isDragReject) return <h4>Archivo no soportado</h4>
    if (isDragAccept) return <h4>Suelta el archivo para subirlo</h4>

    return (
      <>
        <h4>Selecciona video para cargar</h4>
        <h5>O arrastra y suelta un archivo</h5>
      </>
    )
  }

  return (
    <div className={styles.upload}>
      <h1>Cargar video</h1>
      <form className={styles.form}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={dndClassNames}>
            <img
              src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg"
              width="49"
            />
            {renderDndContent()}
          </div>
        </div>
        <label>
          Leyenda
          <input type="text" placeholder="" />
        </label>

        <button>Publicar</button>
      </form>
    </div>
  )
}
