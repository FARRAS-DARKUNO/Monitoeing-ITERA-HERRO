import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import stylesGlobal from '../../utils/style_global';
import styles from './login_style';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={[stylesGlobal.primer]}>Masuk</Text>
              <Formik
                initialValues={{username: '', password: ''}}
                onSubmit={(values, actions) => {
                  loginUser(values);
                  actions.setSubmitting(false);
                }}
                validationSchema={Yup.object({
                  username: Yup.string()
                    .required('username dibutuhkan!')
                    .min(3, 'username'),
                  password: Yup.string().required('Password dibutuhkan!'),
                })}>
                {formikProps => {
                  const {handleChange, handleBlur, handleSubmit, values, errors} =
                    formikProps;
                  return (
                    <View>
                      <TextInput
                        placeholder="Username"
                        value={values.username}
                        underlineColorAndroid="transparent"
                        placeholderTextColor={'#c4c4c4'}
                        keyboardType="username-address"
                        autoCapitalize="none"
                        autoCompleteType="username"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                      />
                      {errors.username ? (
                        <Text style={stylesGlobal.error}>{errors.username}</Text>
                      ) : (
                        <Text style={stylesGlobal.error}></Text>
                      )}
                      <TextInput
                        placeholder="Password"
                        value={values.password}
                        underlineColorAndroid="transparent"
                        placeholderTextColor={'#c4c4c4'}
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                      />
                      {errors.password ? (
                        <Text style={stylesGlobal.error}>{errors.password}</Text>
                      ) : (
                        <Text style={stylesGlobal.error}></Text>
                      )}
                      <View style={stylesGlobal.backgroundPrimer}>
                        <TouchableOpacity
                          style={stylesGlobal.backgroundPrimer}
                          mode="contained"
                          onPress={() => {
                            handleSubmit();
                          }}>
                          <Text
                            style={[stylesGlobal.button, stylesGlobal.primer]}>
                            Masuk
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              </Formik>
          </View>
        </View>
      );
};

export default LoginPage;