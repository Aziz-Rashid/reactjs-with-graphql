import React, { useEffect } from 'reacts'
import { jsPDF } from "jspdf";
const imagesCanvas = (props) => {
  useEffect(() => {
    const canvas = refs.canvas
    const ctx = canvas.getContext("2d")
    const img = refs.image

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "40px Courier"
      ctx.fillText("Gregory", 210, 75)
    }
    setTimeout(() => {

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF();

      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("download.pdf");
    }, 1000)

  }, [])
  return (
    <div >
      <canvas ref="canvas" width={640} height={425} />
      <img ref="image" src={props.file} className="hidden" />
    </div>
  )
}

export default imagesCanvas
