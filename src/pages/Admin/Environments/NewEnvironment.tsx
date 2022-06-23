import { useCallback, useState, useEffect, useMemo } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { Typography, Button } from "@mui/material";

import { useForm } from "react-hook-form";

import { useDropzone } from "react-dropzone";

import { makeStyles } from "@mui/styles";

import { toast } from "react-toastify";

import { api } from "../../../services/api";

import { LoadingSpinner } from "../../../components/LoadingSpinner";

import { IImageImgur } from "../../../types";
import { ArrowBack } from "@mui/icons-material";

const useStyles: any = makeStyles(() => ({
  container: {
    padding: "32px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  eventsContainer: {
    display: "flex",
    gap: "16px",
  },
  headerWrapper: {
    width: "100%",
    height: "40px",
    marginBottom: "32px",
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  },
  eventWrapper: {
    maxWidth: "20%",
    flexGrow: 1,
    padding: "16px",
    borderRadius: "10px",
    border: "solid #fff 1px",
  },
  eventImage: {
    width: "100%",
  },
  eventLabel: {
    fontWeight: 500,
    paddingBottom: "16px",
  },
  eventActions: {
    paddingTop: "16px",
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    gap: "16px",
  },
  formItemWrapper: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "16px"
  },
  formItemLabel: {
    width: "100%",
  },
  formItemInput: {
    width: "100%",
    minHeight: "40px",
    padding: ".375rem .75rem",
    border: "1px solid #ced4da",
    borderRadius: ".25rem"
  },
  formItemTextArea: {
    width: "100%",
    minHeight: "64px",
    maxWidth: "100%",
    padding: ".375rem .75rem",
    border: "1px solid #ced4da",
    borderRadius: ".25rem"
  }
}));

export const AdminNewEnvironment = () => {
  const classes = useStyles();

  const {environmentId} = useParams()

  const navigate = useNavigate();

  //States
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const [isDeletingImage, setIsDeletingImage] = useState<boolean>(false);

  const [previewImageSelectedWithUpload, setPreviewImageSelectedWithUpload] =
    useState<string>("");
  const [fastPreviewImageSelected, setFastPreviewImageSelected] =
    useState<string>("");

  const [imgurImageInfos, setImgurImageInfos] = useState<IImageImgur | null >(null)

  //Functions for handle image file
  const handleFile = async (fileAccepted?: any, fileRejected?: any) => {
    try {
      if (fileRejected) {
        fileRejected?.map((file: any) => {
          file?.errors?.map((errors: any) => {
            if (errors?.code === "file-invalid-type") {
              toast.error("Tipo de arquivo invalido, verifique e tente novamente!");
            }

            if (errors?.code === "file-too-large") {
              toast.error("Arquivo maior que 10MB, verifique e tente novamente!");
            }

            return;
          });
        });
      }

      if (fileAccepted && fileAccepted[0]) {
        const file = fileAccepted[0];
        setFastPreviewImageSelected(URL.createObjectURL(file));

        let imageFormData = new FormData();

        imageFormData.append("image", file);

        setIsUploadingImage(true);

        await api()
          .post("/image/upload", imageFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${window.sessionStorage.getItem("auth")}`
            },
          })
          .then((res: any) => {
            const { data } = res;

            if (res.status === 200 && data.image_link) {
              setIsUploadingImage(false);
              setImgurImageInfos(data)
              setPreviewImageSelectedWithUpload(data.image_link);
              toast.success("Upload de imagem bem sucedido!");
            } else {
              setIsUploadingImage(false);
              toast.error("Falha ao subir a imagem, tente novamente mais tarde!");
            }
          });
      }
    } catch (error) {
      setIsUploadingImage(false);
      toast.error("Falha ao subir a imagem, tente novamente mais tarde!");
    }
  };

  const onDrop = useCallback(
    (acceptedFiles?: any, fileRejections?: any) => {
      handleFile(acceptedFiles, fileRejections);
    },
    [handleFile]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    accept: "image/jpeg, image/png, image/jpg, image/gif",
    maxSize: 10000000,
    onDrop,
  });

  // Form usage and functions
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmitForm = async (data: any) => {
    try {
      const { environmentName } = data;

      const objectCreateEnvironment = {
        title: environmentName,
        ...imgurImageInfos
      };

      if(environmentId) {
        await api().put(`/environments/${environmentId}`, objectCreateEnvironment)
        .then((response: any) => {
          const { status, data } = response;

          if (status === 200) {
            toast.success(data.message);
            navigate('/admin/environments')
          }
        })
      } else {
        await api()
        .post("/environments/create", objectCreateEnvironment)
        .then((response: any) => {
          const { status, data } = response;

          if (status === 200) {
            toast.success(data.message);
            navigate('/admin/environments')
          }
      });
      }
    } catch (error) {
      environmentId 
      ? toast.error("Erro ao editar ambiente, por favor tente novamente mais tarde!") 
      : toast.error("Erro ao criar ambiente, por favor tente novamente mais tarde!")
      console.log(error);
    }
  };

  const removeImage = async () => {
    try {
      setIsDeletingImage(true);

      await api()
        .delete(`/image/${imgurImageInfos?.image_hash}`)
        .then((res: any) => {
          const { data } = res;

          if (
            res.status === 200 &&
            data.message === "Imagem deletada com sucesso!"
          ) {
            setIsDeletingImage(false);
            toast.success(data.message);
            setPreviewImageSelectedWithUpload("");
            setFastPreviewImageSelected("");
            setImgurImageInfos(null)
          }
        });
    } catch (error) {
      setIsDeletingImage(false);
      toast.error("Erro ao deletar a imagem, tenta novamente...");
      console.log(error);
    }
  };

  const title = watch('environmentName');

  const fetchEnvironmentAndSetValues = async () => {
    try {
      if(environmentId) {
        setIsUploadingImage(true)

        await api().get(`/environments/${environmentId}`)
        .then((response:any) => {
          const {status, data} = response;

          if(status === 200) {
            let imgurInfos: IImageImgur = {
              image_hash: data.imgur_id,
              image_delete_hash: data.imgur_delete_hash,
              image_link: data.imgur_link,
            }

            setValue('environmentName', data.title)
            setPreviewImageSelectedWithUpload(data.imgur_link)
            setImgurImageInfos(imgurInfos)
            setIsUploadingImage(false)
          }
        })
        .catch((error:any) => {
          if(error.response.status === 404) {
            toast.error(error.response.data.message);
          }
          setIsUploadingImage(false)
        })
      }
    } catch (error) {
      console.log(error)
      setIsUploadingImage(false)
    }
  }

  useEffect(() => {
    fetchEnvironmentAndSetValues()
  }, [environmentId])

  //Verifications
  const disableButtons = isUploadingImage || isDeletingImage || isSubmitting;

  const canSubmit = Boolean(!disableButtons && title && (fastPreviewImageSelected || previewImageSelectedWithUpload))

  return (
    <div className={classes.container}>
      <div className={classes.headerWrapper}>
        <Link
          to="/admin/environments"
          style={{ textDecoration: "none", color: "inherit", position: 'absolute', left: '15px' }}
        >
          <Button startIcon={<ArrowBack />}>
            Voltar
          </Button>
        </Link>
      

        <Typography
          variant="h1"
          sx={{
            margin: "5px 0 50px 0",
            fontSize: "25px",
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          {environmentId ? 'Editar ambiente' : 'Novo ambiente'}
        </Typography>
      </div>

      <div className={classes.eventsContainer}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className={classes.formItemWrapper}>
            <label className={classes.formItemLabel} htmlFor="eventName">Nome do Evento</label>
            <input
              className={classes.formItemInput}
              type="text"
              id="environmentName"
              {...register("environmentName", {
                required: true,
              })}
              placeholder="Digite o nome do Ambiente"
            />
            {errors.environmentName?.type === "required" &&
              "Nome do ambiente necessário!"}
          </div>

          <div
            {...getRootProps({
              className: "dropzone",
            })}
          >
            {isUploadingImage ||
            (isDeletingImage && !fastPreviewImageSelected) ? (
              <LoadingSpinner />
            ) : fastPreviewImageSelected || previewImageSelectedWithUpload  ? (
              <>
                {isUploadingImage || (isDeletingImage && <LoadingSpinner />)}

                <img
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                  alt="Image uploaded"
                  src={
                    previewImageSelectedWithUpload
                      ? previewImageSelectedWithUpload
                      : fastPreviewImageSelected
                  }
                />

                <Button onClick={removeImage} disabled={disableButtons}>
                  Remover imagem
                </Button>
              </>
            ) : (
              <>
                <div>
                  <input {...getInputProps()} disabled={disableButtons} />
                  <p>Arraste a imagem aqui</p>
                </div>

                <div style={{margin: '10px 0'}}>
                  <Button onClick={open} disabled={disableButtons}>
                    Escolher imagem
                  </Button>
                </div>
              </>
            )}
          </div>

          <Button variant="outlined" type="submit" disabled={!canSubmit}>
            {environmentId ? "Editar" : "Criar"}
          </Button>
        </form>
      </div>
    </div>
  );
};
