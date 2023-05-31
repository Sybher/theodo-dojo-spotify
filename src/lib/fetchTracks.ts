import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQBkPF_QMI9ag57R--YlDCZNmOFDL8C9hS3q1GVr6UgavuZfF9BnaZmxD_V_AypjHLiczr_ev4KjcL-uMBmV4mfDlUYDLIzUPwulKOS9u5Vz-lNC4I-urKaLA0M4ap_t7fiiiAbiu6byYsUP5Rzp5bT6BJCD_ZJ49XIp3SWLlCll42Z4fvoUN3f-IEi7YOs0-gzagK-jOowtV6AkaA';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
