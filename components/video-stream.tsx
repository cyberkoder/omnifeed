"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoStreamProps {
    src: string;
    title: string;
}

export function VideoStream({ src, title }: VideoStreamProps) {
    const videoRef = useRef(null);
    const playerRef = useRef<any>(null);

    useEffect(() => {
        if (videoRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                fluid: true,
                sources: [
                    {
                        src: src,
                        type: "application/x-mpegURL",
                    },
                ],
            });
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
            }
        };
    }, [src]);

    return (
        <div className="video-stream">
            <div data-vjs-player>
                <video
                    ref={videoRef}
                    className="video-js vjs-big-play-centered"
                    playsInline
                />
            </div>
            <h3 className="mt-2 font-medium">{title}</h3>
        </div>
    );
}
