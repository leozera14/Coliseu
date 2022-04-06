import { useCallback, useState } from "react";

import { Typography, Button } from "@mui/material";

import { useForm } from "react-hook-form";

import { useDropzone } from "react-dropzone";

import { makeStyles } from "@mui/styles";

import { toast, ToastContainer } from "react-toastify";

import { api } from "../../services/api";
import axios from "axios";

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
}));

const mockEvents = [
  {
    id: "119960ed-6379-46a4-a214-7fb6c5b70806",
    label: "Swingao bolado dos anao careca",
    description:
      "Swing de qualidade na melhor casa do brasil com 73 anões carecas e direito a uma carreirinha no pau do anão para cada convidado.",
    imageLabel: "Anões do swing",
    imageUrl:
      "http://images7.memedroid.com/images/UPLOADED130/54f9c1ec91293.jpeg",
  },
  {
    id: "119960ed-6379-46a4-a214-7fb6c5b70806",
    label: "Swingao bolado dos anao careca",
    description:
      "Swing de qualidade na melhor casa do brasil com 73 anões carecas e direito a uma carreirinha no pau do anão para cada convidado.",
    imageLabel: "Anões do swing",
    imageUrl:
      "http://images7.memedroid.com/images/UPLOADED130/54f9c1ec91293.jpeg",
  },
];

export const NewEvents = () => {
  const classes = useStyles();

  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);

  const [previewImageSelectedWithUpload, setPreviewImageSelectedWithUpload] =
    useState<string>("");
  const [fastPreviewImageSelected, setFastPreviewImageSelected] =
    useState<string>("");

  const [imageId, setImageId] = useState<number>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (data: any) => {
    try {
      const { eventName, eventDescription } = data;

      const objectCreateEvent = {
        title: eventName,
        description: eventDescription,
        image_id: imageId,
      };

      await api()
        .post("/events/create", objectCreateEvent)
        .then((res: any) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const removeImage = () => {
    setPreviewImageSelectedWithUpload("");
    setFastPreviewImageSelected("");
  };

  const handleFile = async (fileAccepted?: any, fileRejected?: any) => {
    try {
      if (fileRejected) {
        fileRejected?.map((file: any) => {
          file?.errors?.map((errors: any) => {
            if (errors?.code === "file-invalid-type") {
              toast.error(`${errors?.message}`);
            }

            if (errors?.code === "file-too-large") {
              toast.error("File is larger than 10 MB");
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
          .post("/image", imageFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res: any) => {
            const { data } = res;

            if (res.status === 200 && data.image) {
              setIsUploadingImage(false);
              setPreviewImageSelectedWithUpload(data.image);
              setImageId(data.id);
              toast.success("Image upload successfully!");
            } else {
              setIsUploadingImage(false);
              toast.error("Image upload failed, try again...");
            }
          });
      }
    } catch (error) {
      setIsUploadingImage(false);
      toast.error("Image upload failed, try again...");
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

  return (
    <div className={classes.container}>
      <div className={classes.headerWrapper}>
        <Typography
          variant="h1"
          sx={{
            margin: "5px 0 50px 0",
            fontSize: "25px",
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          Novo evento
        </Typography>
      </div>

      <div className={classes.eventsContainer}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <label htmlFor="eventName">Nome do Evento</label>
            <input
              type="text"
              id="eventName"
              {...register("eventName", {
                required: true,
              })}
              placeholder="Digite o nome do Evento"
            />
            {errors.eventName?.type === "required" &&
              "Nome do evento necessário!"}
          </div>
          <div>
            <label htmlFor="eventDescription">Descrição do Evento</label>
            <textarea
              id="eventDescription"
              {...register("eventDescription", {
                required: true,
              })}
              placeholder="Digite a Descrição do Evento"
            />
            {errors.eventDescription?.type === "required" &&
              "Nome do evento necessário!"}
          </div>

          <div
            {...getRootProps({
              className: "dropzone",
            })}
          >
            {isUploadingImage && !fastPreviewImageSelected ? (
              <p>Carregano, porra...</p>
            ) : fastPreviewImageSelected ? (
              <>
                {isUploadingImage && <p>Carregano, porra...</p>}

                <img
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                  alt="Image uploaded"
                  src={fastPreviewImageSelected}
                />

                <Button onClick={removeImage}>Remove image</Button>
              </>
            ) : (
              <>
                <div>
                  <input {...getInputProps()} />
                  <p>Drag files here</p>
                </div>

                <div>
                  <Button onClick={open}>Upload image</Button>
                </div>
              </>
            )}
          </div>

          <Button variant="outlined" type="submit">
            Criar
          </Button>
        </form>
      </div>
    </div>
  );
};
