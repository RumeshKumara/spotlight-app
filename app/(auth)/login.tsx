import { COLORS } from '@/constants/theme';
import { styles } from '@/Styles/auth.styles';
import { useSSO } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Login() {
    const {startSSOFlow} = useSSO()
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        try {
            const {createdSessionId, setActive} = await startSSOFlow({ strategy: 'oauth_google' });
            if (setActive && createdSessionId) {
                setActive({ session: createdSessionId });
                router.replace('/(tabs)');
            }
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
        
    };
  return (
    <View style={styles.container}>
        {/* Brand Section */}
        <View style={styles.brandSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="logo-apple" size={32} color={COLORS.primary} />
          </View>
            <Text style={styles.appName}>Spotlight</Text>
          <Text style={styles.tagline}>Your personal spotlight</Text>
        </View>
        {/* Illustration Section */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../../assets/images/Mental-health-bro.png')}
            style={styles.illustration}
            resizeMode="cover"
          />
          </View>
        {/* Login Section */}
        <View style={styles.loginSection}>
            {/* Google Button */}
           <TouchableOpacity style={styles.googleButton}
            onPress={handleGoogleSignIn}
            activeOpacity={0.8}
           >
             <View style={styles.googleIconContainer}>
                <Ionicons name="logo-google" size={24} color={COLORS.surface} />
            </View>
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
                By continuing, you agree to our
                <Text style={{ color: COLORS.primary }}> Terms of Service </Text>
                and
                <Text style={{ color: COLORS.primary }}> Privacy Policy </Text>.
            </Text>

        </View>
     </View>
  );
}
