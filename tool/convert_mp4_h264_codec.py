import cv2
import argparse

def mp4_to_h264(input_file, output_file):
    # Read the input video file
    cap = cv2.VideoCapture(input_file)
    
    # Get the video writer object
    fourcc = cv2.VideoWriter_fourcc(*"H264")
    out = cv2.VideoWriter(output_file, fourcc, 24.0, (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))))
    
    # Iterate through each frame of the video and write it to the output file
    while True:
        ret, frame = cap.read()
        
        if not ret:
            break
        
        out.write(frame)
    
    # Release the resources
    cap.release()
    out.release()

parser = argparse.ArgumentParser(
                    description='Script to convert mp4 to h264 codec',)
parser.add_argument('-i', '--input')
parser.add_argument('-o', '--output')
args = parser.parse_args()

mp4_to_h264(args.input, args.output)
