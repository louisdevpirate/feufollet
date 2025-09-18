import { supabase } from './client';

export async function uploadImage(file: File, bucket: string, path: string) {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) {
      console.error('Error uploading image:', error);
      throw new Error('Impossible de télécharger l\'image');
    }

    return data;
  } catch (error) {
    console.error('Upload error:', error);
    throw new Error('Erreur lors du téléchargement');
  }
}

export async function getImageUrl(bucket: string, path: string) {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  return data.publicUrl;
}

export async function deleteImage(bucket: string, path: string) {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      console.error('Error deleting image:', error);
      throw new Error('Impossible de supprimer l\'image');
    }

    return true;
  } catch (error) {
    console.error('Delete error:', error);
    throw new Error('Erreur lors de la suppression');
  }
}

// Fonction pour uploader les images de référence
export async function uploadReferenceImages(files: File[], requestId: string, requestType: 'tattoo' | 'portrait') {
  const uploadPromises = files.map(async (file, index) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${requestType}_${requestId}_${index}.${fileExt}`;
    const filePath = `references/${fileName}`;
    
    return uploadImage(file, 'uploads', filePath);
  });

  try {
    const results = await Promise.all(uploadPromises);
    return results.map(result => result.path);
  } catch (error) {
    console.error('Error uploading reference images:', error);
    throw new Error('Impossible de télécharger les images de référence');
  }
}
